const Op = {
  eq: Symbol.for("="),
  ne: Symbol.for("!="),
  gte: Symbol.for(">="),
  gt: Symbol.for(">"),
  lte: Symbol.for("<="),
  lt: Symbol.for("<"),

  and: Symbol.for(" and "),
  or: Symbol.for(" or "),
  not: Symbol.for(" not "),

  like: Symbol.for(" like "),
  in: Symbol.for(" in "),
  between: Symbol.for(" between "),

  /*
      is: Symbol.for("is"),
      notIn: Symbol.for("notIn"),
      
      notLike: Symbol.for("notLike"),
      iLike: Symbol.for("iLike"),
      notILike: Symbol.for("notILike"),
      startsWith: Symbol.for("startsWith"),
      endsWith: Symbol.for("endsWith"),
      substring: Symbol.for("substring"),
      regexp: Symbol.for("regexp"),
      notRegexp: Symbol.for("notRegexp"),
      iRegexp: Symbol.for("iRegexp"),
      notIRegexp: Symbol.for("notIRegexp"),
      
      notBetween: Symbol.for("notBetween"),
      overlap: Symbol.for("overlap"),
      contains: Symbol.for("contains"),
      contained: Symbol.for("contained"),
      adjacent: Symbol.for("adjacent"),
      strictLeft: Symbol.for("strictLeft"),
      strictRight: Symbol.for("strictRight"),
      noExtendRight: Symbol.for("noExtendRight"),
      noExtendLeft: Symbol.for("noExtendLeft"),
      
      any: Symbol.for("any"),
      all: Symbol.for("all"),
      values: Symbol.for("values"),
      col: Symbol.for("col"),
      placeholder: Symbol.for("placeholder"),
      join: Symbol.for("join"),
      match: Symbol.for("match"),
      */
};

function opCheck(str, opKey, fl) {
  console.log("CHECK ", fl);
  if ([Op.in, Op.between].indexOf(opKey) > -1) {
    str += Symbol.keyFor(opKey);
    if (Op.in === opKey) {
      str += "(" + fl + ")";
    }
    if (Op.between === opKey) {
      str += fl[0] + " and " + fl[1];
    }
  } else {
    if (fl === null) {
      if (Op.eq === opKey) {
        str += " IS NULL";
      } else if (Op.ne === opKey) {
        str += " IS NOT NULL";
      } else {
        //console.log("ONLY eq,ne allowed with null");
        throw new Error("ONLY eq,ne allowed with null");
      }
    } else {
      str += Symbol.keyFor(opKey) + fl;
    }
  }
  return str;
}

/*
  function opCheck(str, opKey, fl) {
    console.log("CHECK ", fl);
    if ([Op.in, Op.between].indexOf(opKey) > -1) {
      str += Symbol.keyFor(opKey);
      if (Op.in === opKey) {
        str += "(" + fl + ")";
      }
      if (Op.between === opKey) {
        str += fl[0] + " and " + fl[1];
      }
    } else {
      if (fl === null) {
        if (Op.eq === opKey) {
          str += " IS NULL";
        } else if (Op.ne === opKey) {
          str += " IS NOT NULL";
        } else {
          //console.log("ONLY eq,ne allowed with null");
          throw new Error("ONLY eq,ne allowed with null");
        }
      } else {
        str += Symbol.keyFor(opKey) + fl;
      }
    }
    return str;
  }
  */
const s3DataTypes = [
  "bool",
  "int",
  "integer",
  "string",
  "float",
  "decimal",
  "numeric",
  "timestamp",
];
const dateParts = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timezone_hour",
  "timezone_minute",
];

function _fn(fnName, fnCol, fnOpts) {
  if (fnName === "CAST") {
    if (typeof fnOpts !== "string" || s3DataTypes.indexOf(fnOpts) === -1) {
      throw new Error(
        "Datatype error, only (",
        s3DataTypes.join(",") + ") allowed"
      );
    } else {
      return `CAST(${fnCol} as ${fnOpts})`;
    }
  }
  if (
    fnName === "CHAR_LENGTH" ||
    fnName === "CHARACTER_LENGTH" ||
    fnName === "UPPER" ||
    fnName === "LOWER"
  ) {
    return `${fnName}(${fnCol})`;
  }
  if (fnName === "TRIM") {
    //TRIM ( [[LEADING | TRAILING | BOTH remove_chars] FROM] string )
    let opt = "BOTH";
    if (
      typeof fnOpts !== "undefined" &&
      (typeof fnOpts !== "string" ||
        ["LEADING", "TRAILING"].indexOf(fnOpts) === -1)
    ) {
      throw new Error(
        "Trim option error, only (LEADING,TRAILING or BOTH) allowed "
      );
    } else {
      if (typeof fnOpts !== "undefined") {
        opt = fnOpts;
      }
      return `${fnName}(${opt} FROM ${fnCol})`;
    }
  }

  if (fnName === "SUBSTRING") {
    if (typeof fnOpts !== "object" || fnOpts.length === 0) {
      throw new Error("Substring option error, [start, length]");
    }
    //SUBSTRING( string FROM start [ FOR length ] )
    if (fnOpts.length === 2) {
      return `${fnName}(${fnCol} ,${fnOpts[0]},${fnOpts[1]})`;
    } else {
      return `${fnName}(${fnCol} ,${fnOpts[0]})`;
    }
  }

  // aggregate functions...
  if (["AVG", "MAX", "MIN", "SUM", "COUNT"].indexOf(fnName) > -1) {
    return `${fnName}(${fnCol})`;
  }

  // date functions...
  if (fnName === "UTCNOW") {
    return `${fnName}()`;
  }
  if (["TO_TIMESTAMP"].indexOf(fnName) > -1) {
    return `${fnName}(${fnCol})`;
  }
  if (fnName === "DATE_ADD") {
    if (typeof fnOpts !== "object" || fnOpts.length != 2) {
      throw new Error("DATE_ADD option error, [date_part, value]");
    }
    return `${fnName}(${fnOpts[0]},${fnOpts[1]}, ${fnCol})`;
    //DATE_ADD(year, 5, `2010-01-01T`)
  }
  if (fnName === "DATE_DIFF") {
    if (typeof fnOpts !== "object" || fnOpts.length != 2) {
      throw new Error("DATE_DIFF option error, [date_part, timestamp]");
    }
    return `${fnName}(${fnOpts[0]}, ${fnCol}, ${fnOpts[1]})`;
    //DATE_DIFF(year, `2010-01-01T`, `2011-01-01T`)
  }

  if (fnName === "TO_STRING") {
    //TO_STRING(`1969-07-20T20:18Z`,  'MMMM d, y')
    if (typeof fnOpts !== "undefined" && typeof fnOpts !== "string") {
      throw new Error("TO_STRING option error, time format pattern is missing");
    }
    return `${fnName}(${fnCol} ,${fnOpts})`;
  }

  if (fnName === "EXTRACT") {
    //EXTRACT(YEAR FROM `2010-01-01T`)
    if (
      typeof fnOpts !== "undefined" &&
      typeof fnOpts !== "string" &&
      dateParts.indexOf(fnOpts) === -1
    ) {
      throw new Error(
        "EXTRACT option error, date part value is missing or invalid"
      );
    }

    return `${fnName}(${fnOpts} FROM ${fnCol})`;
  }
  // short cuts...
  if (fnName === "YEAR") {
    return `EXTRACT(year from TO_TIMESTAMP(${fnCol}))`;
  }
  if (fnName === "MONTH") {
    return `EXTRACT(month from TO_TIMESTAMP(${fnCol}))`;
  }
  if (fnName === "DAY") {
    return `EXTRACT(day from TO_TIMESTAMP(${fnCol}))`;
  }
  if (fnName === "HOUR") {
    return `EXTRACT(hour from TO_TIMESTAMP(${fnCol}))`;
  }
}

function buildFilter(filter = {}) {
  let s = {};
  const logicalOperators = Object.getOwnPropertySymbols(filter);
  //console.log("LOG ", logicalOperators);
  if (logicalOperators.length > 0) {
    logicalOperators.forEach((logicalOP) => {
      const logicalOPSymbol = Symbol.keyFor(logicalOP).trim();
      s[logicalOPSymbol] = {};
      Object.keys(filter[logicalOP]).forEach((k, ii) => {
        //console.log("KEY ", k);
        s[logicalOPSymbol][[k]] = {};
        Object.getOwnPropertySymbols(filter[logicalOP][k]).forEach((e, i) => {
          //console.log("E ", e);
          s[logicalOPSymbol][[k]][[Symbol.keyFor(e).trim()]] =
            filter[logicalOP][k][e];
          console.log("II ", ii);
          console.log(s);
          console.log(e);
          console.log(filter[logicalOP][k][e]);
          //console.log("CHECK ",opCheck(s, e, filter[logicalOP][k][e]));
        });
      });
    });
  } else {
    //console.log("ONLY ONE CONDITION...", filter);
    if (Object.keys(filter).length > 0) {
      Object.keys(filter).forEach((k, ii) => {
        s[[k]] = {};
        Object.getOwnPropertySymbols(filter[k]).forEach((e, i) => {
          //console.log("E ", e);
          s[k][[Symbol.keyFor(e).trim()]] = filter[k][e];
          console.log("ONE ", i);
          console.log(k, k[0]);
          console.log(e);
        });
      });
    }
  }
  /*
    const logicalOperators = Object.getOwnPropertySymbols(filter);
    if (logicalOperators.length > 0) {
      let logicalOP = logicalOperators[0];
      Object.keys(filter[logicalOP]).forEach((k, ii) => {
        Object.getOwnPropertySymbols(filter[logicalOP][k]).forEach((e, i) => {
          //console.log("E= ", e, Symbol.keyFor(e), i, ii);
          if (ii > 0) {
            s += Symbol.keyFor(logicalOP) + k;
          } else {
            s += k;
          }
          s = opCheck(s, e, filter[logicalOP][k][e]);
        });
      });
      console.log("S0 ", s);
    } else {
      console.log(" HERE ");
      Object.keys(filter).forEach((k) => {
        s += k;
        Object.getOwnPropertySymbols(filter[k]).forEach((e, i) => {
          //console.log(e, Symbol.keyFor(e));
          //console.log(filter[k][e]);
          if ([Op.and, Op.or, Op.not].indexOf(e) > -1) {
            let logicalOP = e;
            Object.getOwnPropertySymbols(filter[k][e]).forEach((ee, ii) => {
              //console.log(ee);
              if (ii > 0) {
                s += Symbol.keyFor(logicalOP) + k;
              }
              s = opCheck(s, ee, filter[k][e][ee]);
            });
          } else if (i > 0) {
            //console.log("ERROR 1");
            throw new Error("Logical opertor error");
          } else {
            s = opCheck(s, e, filter[k][e]);
          }
  
          //s += Symbol.keyFor(e) + filter[k][e];
        });
        //console.log(Object.getOwnPropertySymbols(filter));
       
      });
    }
    */
  //console.log("FILTER CHANGED ", s);
  return JSON.stringify(s);
}
/*
const filter = {
  [Op.and]: {
    ["2021-12-13"]: {
      [Op.gt]: { fn: "DAY", field: "s3_partition", opts: null },
    },
  },
};
*/
const filter = {
  [Op.and]: {
    ["s3::date"]: {
      [Op.between]: ["2021-11-20", "2021-12-15"],
    },
    [100]: {
      [Op.eq]: { field: "field_name" },
    },
  },
};

console.log(buildFilter(filter));
