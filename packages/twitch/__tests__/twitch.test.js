'use strict';
import {getModuleName,
  getInfo,
  getFields,
  queryAllStreamTags,
  queryAutoModSettings,
  queryBannedUsers,
  queryBitsLeaderboard,
  queryBlockedTerms,
  queryBroadcasterSubscriptions,
  queryCategories,
  queryChannelChatBadges,
  queryChannelEditors,
  queryChannelEmotes,
  queryChannelInformation,
  queryChannelStreamSchedule,
  queryChannelTeams,
  queryChannels,
  queryChatSettings,
  queryCheermotes,
  queryClips,
  queryCreatorGoals,
  queryCustomReward,
  queryCustomRewardRedemption,
  queryEmoteSets,
  queryExtensionAnalytics,
  queryExtensionLiveChannels,
  queryExtensionTransactions,
  queryExtensions,
  queryFollowedStreams,
  queryGameAnalytics,
  queryGames,
  queryGlobalChatBadges,
  queryGlobalEmotes,
  queryHypeTrainEvents,
  queryModerators,
  queryPolls,
  queryPredictions,
  queryReleasedExtensions,
  querySoundtrackCurrentTrack,
  querySoundtrackPlaylist,
  querySoundtrackPlaylists,
  queryStreamKey,
  queryStreamTags,
  queryStreams,
  queryStreamsMarkers,
  queryTeams,
  queryTopGames,
  queryUserActiveExtensions,
  queryUserBlockList,
  queryUserExtensions,
  queryUserSubscription,
  queryUsers,
  queryUsersFollows,
  queryVideos
  } from "@prifina/twitch";
import 'regenerator-runtime/runtime';
import { AllStreamTags,
  AutoModSettings,
  BannedUsers,
  BitsLeaderboard,
  BlockedTerms,
  BroadcasterSubscriptions,
  Categories,
  ChannelChatBadges,
  ChannelEditors,
  ChannelEmotes,
  ChannelInformation,
  ChannelStreamSchedule,
  ChannelTeams,
  Channels,
  ChatSettings,
  Cheermotes,
  Clips,
  CreatorGoals,
  CustomReward,
  CustomRewardRedemption,
  EmoteSets,
  ExtensionAnalytics,
  ExtensionLiveChannels,
  ExtensionTransactions,
  Extensions,
  FollowedStreams,
  GameAnalytics,
  Games,
  GlobalChatBadges,
  GlobalEmotes,
  HypeTrainEvents,
  Moderators,
  Polls,
  Predictions,
  ReleasedExtensions,
  SoundtrackCurrentTrack,
  SoundtrackPlaylist,
  SoundtrackPlaylists,
  StreamKey,
  StreamTags,
  Streams,
  StreamsMarkers,
  Teams,
  TopGames,
  UserActiveExtensions,
  UserBlockList,
  UserExtensions,
  UserSubscription,
  Users,
  UsersFollows,
  Videos } from "@dynamic-data/twitch-data";



describe("Twitch", () => {
  //test.todo("needs tests");
  it("test if imports work", () => {
    expect(getFields).toBeTruthy()
    expect(getInfo).toBeTruthy()
    expect(getModuleName).toBeTruthy()
    expect(queryAllStreamTags).toBeTruthy()
  })
  it("getModuleName", () => {
    const name = getModuleName()
    expect(typeof name).toEqual('string');
    expect(name).toEqual('Twitch');

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
  it("queryAllStreamTags", async () => {
    const result = await queryAllStreamTags({stage: "dev"})
    // console.log("queryAllStreamTags ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AllStreamTags }}})
  });
  it("queryAutoModSettings", async () => {
    const result = await queryAutoModSettings({stage: "dev"})
    // console.log("queryAutoModSettings ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:AutoModSettings}}})
  });
  it("queryBannedUsers", async () => {
    const result = await queryBannedUsers({stage: "dev"})
    // console.log("queryBannedUsers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BannedUsers}}})
  });
  it("queryBitsLeaderboard", async () => {
    const result = await queryBitsLeaderboard({stage: "dev"})
    // console.log("queryBitsLeaderboard ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BitsLeaderboard}}})
  });
  it("queryBlockedTerms", async () => {
    const result = await queryBlockedTerms({stage: "dev"})
    // console.log("queryBlockedTerms ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BlockedTerms}}})
  });
  it("queryBroadcasterSubscriptions", async () => {
    const result = await queryBroadcasterSubscriptions({stage: "dev"})
    // console.log("queryBroadcasterSubscriptions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:BroadcasterSubscriptions}}})
  });
  it("queryCategories", async () => {
    const result = await queryCategories({stage: "dev"})
    // console.log("queryCategories ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Categories}}})
  });
  it("queryChannelChatBadges", async () => {
    const result = await queryChannelChatBadges({stage: "dev"})
    // console.log("queryChannelChatBadges ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelChatBadges}}})
  });
  it("queryChannelEditors", async () => {
    const result = await queryChannelEditors({stage: "dev"})
    // console.log("queryChannelEditors ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelEditors}}})
  });
  it("queryChannelEmotes", async () => {
    const result = await queryChannelEmotes({stage: "dev"})
    // console.log("queryChannelEmotes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelEmotes}}})
  });
  it("queryChannelInformation", async () => {
    const result = await queryChannelInformation({stage: "dev"})
    // console.log("queryChannelInformation ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelInformation}}})
  });
  it("queryChannelStreamSchedule", async () => {
    const result = await queryChannelStreamSchedule({stage: "dev"})
    // console.log("queryChannelStreamSchedule ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelStreamSchedule}}})
  });
  it("queryChannelTeams", async () => {
    const result = await queryChannelTeams({stage: "dev"})
    // console.log("queryChannelTeams ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChannelTeams}}})
  });
  it("queryChannels", async () => {
    const result = await queryChannels({stage: "dev"})
    // console.log("queryChannels ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Channels}}})
  });
  it("queryChatSettings", async () => {
    const result = await queryChatSettings({stage: "dev"})
    // console.log("queryChatSettings ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ChatSettings}}})
  });
  it("queryCheermotes", async () => {
    const result = await queryCheermotes({stage: "dev"})
    // console.log("queryCheermotes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Cheermotes}}})
  });
  it("queryClips", async () => {
    const result = await queryClips({stage: "dev"})
    // console.log("queryClips ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Clips}}})
  });
  it("queryCreatorGoals", async () => {
    const result = await queryCreatorGoals({stage: "dev"})
    // console.log("queryCreatorGoals ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:CreatorGoals}}})
  });
  it("queryCustomReward", async () => {
    const result = await queryCustomReward({stage: "dev"})
    // console.log("queryCustomReward ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:CustomReward}}})
  });
  it("queryCustomRewardRedemption", async () => {
    const result = await queryCustomRewardRedemption({stage: "dev"})
    // console.log("queryCustomRewardRedemption ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:CustomRewardRedemption}}})
  });
  it("queryEmoteSets", async () => {
    const result = await queryEmoteSets({stage: "dev"})
    // console.log("queryEmoteSets ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:EmoteSets}}})
  });
  it("queryExtensionAnalytics", async () => {
    const result = await queryExtensionAnalytics({stage: "dev"})
    // console.log("queryExtensionAnalytics ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ExtensionAnalytics}}})
  });
  it("queryExtensionLiveChannels", async () => {
    const result = await queryExtensionLiveChannels({stage: "dev"})
    // console.log("queryExtensionLiveChannels ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ExtensionLiveChannels}}})
  });
  it("queryExtensionTransactions", async () => {
    const result = await queryExtensionTransactions({stage: "dev"})
    // console.log("queryExtensionTransactions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ExtensionTransactions}}})
  });
  it("queryExtensions", async () => {
    const result = await queryExtensions({stage: "dev"})
    // console.log("queryExtensions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Extensions}}})
  });
  it("queryFollowedStreams", async () => {
    const result = await queryFollowedStreams({stage: "dev"})
    // console.log("queryFollowedStreams ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:FollowedStreams}}})
  });
  it("queryGameAnalytics", async () => {
    const result = await queryGameAnalytics({stage: "dev"})
    // console.log("queryGameAnalytics ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GameAnalytics}}})
  });
  it("queryGames", async () => {
    const result = await queryGames({stage: "dev"})
    // console.log("queryGames ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Games}}})
  });
  it("queryGlobalChatBadges", async () => {
    const result = await queryGlobalChatBadges({stage: "dev"})
    // console.log("queryGlobalChatBadges ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GlobalChatBadges}}})
  });
  it("queryGlobalEmotes", async () => {
    const result = await queryGlobalEmotes({stage: "dev"})
    // console.log("queryGlobalEmotes ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:GlobalEmotes}}})
  });
  it("queryHypeTrainEvents", async () => {
    const result = await queryHypeTrainEvents({stage: "dev"})
    // console.log("queryHypeTrainEvents ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:HypeTrainEvents}}})
  });
  it("queryModerators", async () => {
    const result = await queryModerators({stage: "dev"})
    // console.log("queryModerators ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Moderators}}})
  });
  it("queryPolls", async () => {
    const result = await queryPolls({stage: "dev"})
    // console.log("queryPolls ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Polls}}})
  });
  it("queryPredictions", async () => {
    const result = await queryPredictions({stage: "dev"})
    // console.log("queryPredictions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Predictions}}})
  });
  it("queryReleasedExtensions", async () => {
    const result = await queryReleasedExtensions({stage: "dev"})
    // console.log("queryReleasedExtensions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:ReleasedExtensions}}})
  });
  it("querySoundtrackCurrentTrack", async () => {
    const result = await querySoundtrackCurrentTrack({stage: "dev"})
    // console.log("querySoundtrackCurrentTrack ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SoundtrackCurrentTrack}}})
  });
  it("querySoundtrackPlaylist", async () => {
    const result = await querySoundtrackPlaylist({stage: "dev"})
    // console.log("querySoundtrackPlaylist ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SoundtrackPlaylist}}})
  });
  it("querySoundtrackPlaylists", async () => {
    const result = await querySoundtrackPlaylists({stage: "dev"})
    // console.log("querySoundtrackPlaylists ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:SoundtrackPlaylists}}})
  });
  it("queryStreamKey", async () => {
    const result = await queryStreamKey({stage: "dev"})
    // console.log("queryStreamKey ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StreamKey}}})
  });
  it("queryStreamTags", async () => {
    const result = await queryStreamTags({stage: "dev"})
    // console.log("queryStreamTags ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StreamTags}}})
  });
  it("queryStreams", async () => {
    const result = await queryStreams({stage: "dev"})
    // console.log("queryStreams ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Streams}}})
  });
  it("queryStreamsMarkers", async () => {
    const result = await queryStreamsMarkers({stage: "dev"})
    // console.log("queryStreamsMarkers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:StreamsMarkers}}})
  });
  it("queryTeams", async () => {
    const result = await queryTeams({stage: "dev"})
    // console.log("queryTeams ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Teams}}})
  });
  it("queryTopGames", async () => {
    const result = await queryTopGames({stage: "dev"})
    // console.log("queryTopGames ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:TopGames}}})
  });
  it("queryUserActiveExtensions", async () => {
    const result = await queryUserActiveExtensions({stage: "dev"})
    // console.log("queryUserActiveExtensions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserActiveExtensions}}})
  });
  it("queryUserBlockList", async () => {
    const result = await queryUserBlockList({stage: "dev"})
    // console.log("queryUserBlockList ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserBlockList}}})
  });
  it("queryUserExtensions", async () => {
    const result = await queryUserExtensions({stage: "dev"})
    // console.log("queryUserExtensions ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserExtensions}}})
  });
  it("queryUserSubscription", async () => {
    const result = await queryUserSubscription({stage: "dev"})
    // console.log("queryUserSubscription ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UserSubscription}}})
  });
  it("queryUsers", async () => {
    const result = await queryUsers({stage: "dev"})
    // console.log("queryUsers ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Users}}})
  });
  it("queryUsersFollows", async () => {
    const result = await queryUsersFollows({stage: "dev"})
    // console.log("queryUsersFollows ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:UsersFollows}}})
  });
  it("queryVideos", async () => {
    const result = await queryVideos({stage: "dev"})
    // console.log("queryVideos ", JSON.stringify(result, undefined, 2));
    expect(result).toStrictEqual({data:{getDataObject:{content:Videos}}})
  });
});
