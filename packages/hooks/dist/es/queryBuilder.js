"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._fn = _fn;
exports.buildFilter = buildFilter;
exports.Op = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Op = {
  eq: Symbol["for"]("="),
  ne: Symbol["for"]("!="),
  gte: Symbol["for"](">="),
  gt: Symbol["for"](">"),
  lte: Symbol["for"]("<="),
  lt: Symbol["for"]("<"),
  and: Symbol["for"](" and "),
  or: Symbol["for"](" or "),
  not: Symbol["for"](" not "),
  like: Symbol["for"](" like "),
  "in": Symbol["for"](" in "),
  between: Symbol["for"](" between ")
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
exports.Op = Op;

function opCheck(str, opKey, fl) {
  if ([Op["in"], Op.between].indexOf(opKey) > -1) {
    str += Symbol.keyFor(opKey);

    if (Op["in"] === opKey) {
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

var s3DataTypes = ["bool", "int", "integer", "string", "float", "decimal", "numeric", "timestamp"];
var dateParts = ["year", "month", "day", "hour", "minute", "second", "timezone_hour", "timezone_minute"];

function _fn(fnName, fnCol, fnOpts) {
  if (fnName === "CAST") {
    if (typeof fnOpts !== "string" || s3DataTypes.indexOf(fnOpts) === -1) {
      throw new Error("Datatype error, only (", s3DataTypes.join(",") + ") allowed");
    } else {
      return "CAST(".concat(fnCol, " as ").concat(fnOpts, ")");
    }
  }

  if (fnName === "CHAR_LENGTH" || fnName === "CHARACTER_LENGTH" || fnName === "UPPER" || fnName === "LOWER") {
    return "".concat(fnName, "(").concat(fnCol, ")");
  }

  if (fnName === "TRIM") {
    //TRIM ( [[LEADING | TRAILING | BOTH remove_chars] FROM] string )
    var opt = "BOTH";

    if (typeof fnOpts !== "undefined" && (typeof fnOpts !== "string" || ["LEADING", "TRAILING"].indexOf(fnOpts) === -1)) {
      throw new Error("Trim option error, only (LEADING,TRAILING or BOTH) allowed ");
    } else {
      if (typeof fnOpts !== "undefined") {
        opt = fnOpts;
      }

      return "".concat(fnName, "(").concat(opt, " FROM ").concat(fnCol, ")");
    }
  }

  if (fnName === "SUBSTRING") {
    if (_typeof(fnOpts) !== "object" || fnOpts.length === 0) {
      throw new Error("Substring option error, [start, length]");
    } //SUBSTRING( string FROM start [ FOR length ] )


    if (fnOpts.length === 2) {
      return "".concat(fnName, "(").concat(fnCol, " ,").concat(fnOpts[0], ",").concat(fnOpts[1], ")");
    } else {
      return "".concat(fnName, "(").concat(fnCol, " ,").concat(fnOpts[0], ")");
    }
  } // aggregate functions...


  if (["AVG", "MAX", "MIN", "SUM", "COUNT"].indexOf(fnName) > -1) {
    return "".concat(fnName, "(").concat(fnCol, ")");
  } // date functions...


  if (fnName === "UTCNOW") {
    return "".concat(fnName, "()");
  }

  if (["TO_TIMESTAMP"].indexOf(fnName) > -1) {
    return "".concat(fnName, "(").concat(fnCol, ")");
  }

  if (fnName === "DATE_ADD") {
    if (_typeof(fnOpts) !== "object" || fnOpts.length != 2) {
      throw new Error("DATE_ADD option error, [date_part, value]");
    }

    return "".concat(fnName, "(").concat(fnOpts[0], ",").concat(fnOpts[1], ", ").concat(fnCol, ")"); //DATE_ADD(year, 5, `2010-01-01T`)
  }

  if (fnName === "DATE_DIFF") {
    if (_typeof(fnOpts) !== "object" || fnOpts.length != 2) {
      throw new Error("DATE_DIFF option error, [date_part, timestamp]");
    }

    return "".concat(fnName, "(").concat(fnOpts[0], ", ").concat(fnCol, ", ").concat(fnOpts[1], ")"); //DATE_DIFF(year, `2010-01-01T`, `2011-01-01T`)
  }

  if (fnName === "TO_STRING") {
    //TO_STRING(`1969-07-20T20:18Z`,  'MMMM d, y')
    if (typeof fnOpts !== "undefined" && typeof fnOpts !== "string") {
      throw new Error("TO_STRING option error, time format pattern is missing");
    }

    return "".concat(fnName, "(").concat(fnCol, " ,").concat(fnOpts, ")");
  }

  if (fnName === "EXTRACT") {
    //EXTRACT(YEAR FROM `2010-01-01T`)
    if (typeof fnOpts !== "undefined" && typeof fnOpts !== "string" && dateParts.indexOf(fnOpts) === -1) {
      throw new Error("EXTRACT option error, date part value is missing or invalid");
    }

    return "".concat(fnName, "(").concat(fnOpts, " FROM ").concat(fnCol, ")");
  } // short cuts...


  if (fnName === "YEAR") {
    return "EXTRACT(year from TO_TIMESTAMP(".concat(fnCol, "))");
  }

  if (fnName === "MONTH") {
    return "EXTRACT(month from TO_TIMESTAMP(".concat(fnCol, "))");
  }

  if (fnName === "DAY") {
    return "EXTRACT(day from TO_TIMESTAMP(".concat(fnCol, "))");
  }

  if (fnName === "HOUR") {
    return "EXTRACT(hour from TO_TIMESTAMP(".concat(fnCol, "))");
  }
}

function buildFilter(filter) {
  var s = "";
  Object.keys(filter).forEach(function (k) {
    s += k;
    Object.getOwnPropertySymbols(filter[k]).forEach(function (e, i) {
      console.log(e, Symbol.keyFor(e));
      console.log(filter[k][e]);

      if ([Op.and, Op.or, Op.not].indexOf(e) > -1) {
        var logicalOP = e;
        Object.getOwnPropertySymbols(filter[k][e]).forEach(function (ee, ii) {
          console.log(ee);

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
      } //s += Symbol.keyFor(e) + filter[k][e];

    }); //console.log(Object.getOwnPropertySymbols(filter));

    /*
    Object.keys(filter[k]).forEach((o) => {
    console.log("OP ", o);
    });
    */
  });
  return s;
}
/*
  const filter = {
    rank: {
      [Op.or]: {
        [Op.lt]: 1000,
        [Op.eq]: null,
      },
    },
  };
  */