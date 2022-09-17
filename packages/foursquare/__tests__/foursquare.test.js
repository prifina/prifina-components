'use strict';
import {getFields,
  getInfo,
  getModuleName,queryPhotosDetails,
  queryTipsDetails,
  queryVenuesCategories,
  queryVenuesDetails,
  queryVenuesGetRecommendations,
  queryVenuesGetVenueList,
  queryVenuesHours,
  queryVenuesLikes,
  queryVenuesNextVenues,
  queryVenuesPhotos,
  queryVenuesSearch,
  queryVenuesSimilarVenues,
  queryVenuesSuggestSearch,
  queryVenuesTips,
  queryVenuesTrending,
  } from "@prifina/foursquare";
import 'regenerator-runtime/runtime';
import {
  Venues,
  Tips,
  Photos
} from "@dynamic-data/foursquare-data";



describe("Foursquare", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryPhotosDetails).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Foursquare');

  })
  it("getInfo", () => {
    const name = getInfo()
    // console.log(typeof name)
    //Check if array
    expect(typeof name).toEqual('object'); 
    expect(name.length).toBeTruthy() 
    //Check if each item is string
    expect(typeof name[0]).toEqual('string'); 


  })
  it("queryPhotosDetails", async () => {
    const result = await queryPhotosDetails({stage: "dev"})
    // console.log("queryPhotosDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Photos.photos_details}}})
  });
  it("queryTipsDetails", async () => {
    const result = await queryTipsDetails({stage: "dev"})
    // console.log("queryTipsDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Tips.tips_details}}})
  });
  it("queryVenuesCategories", async () => {
    const result = await queryVenuesCategories({stage: "dev"})
    // console.log("queryVenuesCategories ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_categories}}})
  });
  it("queryVenuesDetails", async () => {
    const result = await queryVenuesDetails({stage: "dev"})
    // console.log("queryVenuesDetails ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_details}}})
  });
  it("queryVenuesGetRecommendations", async () => {
    const result = await queryVenuesGetRecommendations({stage: "dev"})
    // console.log("queryVenuesGetRecommendations ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_getRecommendations}}})
  });
  it("queryVenuesGetVenueList", async () => {
    const result = await queryVenuesGetVenueList({stage: "dev"})
    // console.log("queryVenuesGetVenueList ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_getVenueList}}})
  });
  it("queryVenuesHours", async () => {
    const result = await queryVenuesHours({stage: "dev"})
    // console.log("queryVenuesHours ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_hours}}})
  });
  it("queryVenuesLikes", async () => {
    const result = await queryVenuesLikes({stage: "dev"})
    // console.log("queryVenuesLikes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_likes}}})
  });
  it("queryVenuesNextVenues", async () => {
    const result = await queryVenuesNextVenues({stage: "dev"})
    // console.log("queryVenuesNextVenues ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_nextVenues}}})
  });
  it("queryVenuesPhotos", async () => {
    const result = await queryVenuesPhotos({stage: "dev"})
    // console.log("queryVenuesPhotos ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_photos}}})
  });
  it("queryVenuesSearch", async () => {
    const result = await queryVenuesSearch({stage: "dev"})
    // console.log("queryVenuesSearch ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_search}}})
  });
  it("queryVenuesSimilarVenues", async () => {
    const result = await queryVenuesSimilarVenues({stage: "dev"})
    // console.log("queryVenuesSimilarVenues ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_similarVenues}}})
  });
  it("queryVenuesSuggestSearch", async () => {
    const result = await queryVenuesSuggestSearch({stage: "dev"})
    // console.log("queryVenuesSuggestSearch ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_suggestSearch}}})
  });
  it("queryVenuesTips", async () => {
    const result = await queryVenuesTips({stage: "dev"})
    // console.log("queryVenuesTips ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_tips}}})
  });
  it("queryVenuesTrending", async () => {
    const result = await queryVenuesTrending({stage: "dev"})
    // console.log("queryVenuesTrending ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Venues.venues_trending}}})
  });


});
