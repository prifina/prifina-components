/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/

import {
  AllStreamTags,
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
  Videos
} from "@dynamic-data/twitch-data/mockups";

const dataQuery = `query dataObject($input:DataObjectInput!) {
  getDataObject(input:$input) {
    result
  }
}`;
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

export const getInfo = () => {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return [
    "queryAllStreamTags",
    "queryAutoModSettings",
    "queryBannedUsers",
    "queryBitsLeaderboard",
    "queryBlockedTerms",
    "queryBroadcasterSubscriptions",
    "queryCategories",
    "queryChannelChatBadges",
    "queryChannelEditors",
    "queryChannelEmotes",
    "queryChannelInformation",
    "queryChannelStreamSchedule",
    "queryChannelTeams",
    "queryChannels",
    "queryChatSettings",
    "queryCheermotes",
    "queryClips",
    "queryCreatorGoals",
    "queryCustomReward",
    "queryCustomRewardRedemption",
    "queryEmoteSets",
    "queryExtensionAnalytics",
    "queryExtensionLiveChannels",
    "queryExtensionTransactions",
    "queryExtensions",
    "queryFollowedStreams",
    "queryGameAnalytics",
    "queryGames",
    "queryGlobalChatBadges",
    "queryGlobalEmotes",
    "queryHypeTrainEvents",
    "queryModerators",
    "queryPolls",
    "queryPredictions",
    "queryReleasedExtensions",
    "querySoundtrackCurrentTrack",
    "querySoundtrackPlaylist",
    "querySoundtrackPlaylists",
    "queryStreamKey",
    "queryStreamTags",
    "queryStreams",
    "queryStreamsMarkers",
    "queryTeams",
    "queryTopGames",
    "queryUserActiveExtensions",
    "queryUserBlockList",
    "queryUserExtensions",
    "queryUserSubscription",
    "queryUsers",
    "queryUsersFollows",
    "queryVideos"
  ];
};

export const getModuleName = () => {
  return "Twitch";
};
export const getFields = (query) => {
  let fields = [];
  switch (query) {
    case "queryAllStreamTags":
      fields = Object.keys(AllStreamTags);
      break;
    case "queryAutoModSettings":
      fields = Object.keys(AutoModSettings);
      break;
    case "queryBannedUsers":
      fields = Object.keys(BannedUsers);
      break;
    case "queryBitsLeaderboard":
      fields = Object.keys(BitsLeaderboard);
      break;
    case "queryBlockedTerms":
      fields = Object.keys(BlockedTerms);
      break;
    case "queryBroadcasterSubscriptions":
      fields = Object.keys(BroadcasterSubscriptions);
      break;
    case "queryCategories":
      fields = Object.keys(Categories);
      break;
    case "queryChannelChatBadges":
      fields = Object.keys(ChannelChatBadges);
      break;
    case "queryChannelEditors":
      fields = Object.keys(ChannelEditors);
      break;
    case "queryChannelEmotes":
      fields = Object.keys(ChannelEmotes);
      break;
    case "queryChannelInformation":
      fields = Object.keys(ChannelInformation);
      break;
    case "queryChannelStreamSchedule":
      fields = Object.keys(ChannelStreamSchedule);
      break;
    case "queryChannelTeams":
      fields = Object.keys(ChannelTeams);
      break;
    case "queryChannels":
      fields = Object.keys(Channels);
      break;
    case "queryChatSettings":
      fields = Object.keys(ChatSettings);
      break;
    case "queryCheermotes":
      fields = Object.keys(Cheermotes);
      break;
    case "queryClips":
      fields = Object.keys(Clips);
      break;
    case "queryCreatorGoals":
      fields = Object.keys(CreatorGoals);
      break;
    case "queryCustomReward":
      fields = Object.keys(CustomReward);
      break;
    case "queryCustomRewardRedemption":
      fields = Object.keys(CustomRewardRedemption);
      break;
    case "queryEmoteSets":
      fields = Object.keys(EmoteSets);
      break;
    case "queryExtensionAnalytics":
      fields = Object.keys(ExtensionAnalytics);
      break;
    case "queryExtensionLiveChannels":
      fields = Object.keys(ExtensionLiveChannels);
      break;
    case "queryExtensionTransactions":
      fields = Object.keys(ExtensionTransactions);
      break;
    case "queryExtensions":
      fields = Object.keys(Extensions);
      break;
    case "queryFollowedStreams":
      fields = Object.keys(FollowedStreams);
      break;
    case "queryGameAnalytics":
      fields = Object.keys(GameAnalytics);
      break;
    case "queryGames":
      fields = Object.keys(Games);
      break;
    case "queryGlobalChatBadges":
      fields = Object.keys(GlobalChatBadges);
      break;
    case "queryGlobalEmotes":
      fields = Object.keys(GlobalEmotes);
      break;
    case "queryHypeTrainEvents":
      fields = Object.keys(HypeTrainEvents);
      break;
    case "queryModerators":
      fields = Object.keys(Moderators);
      break;
    case "queryPolls":
      fields = Object.keys(Polls);
      break;
    case "queryPredictions":
      fields = Object.keys(Predictions);
      break;
    case "queryReleasedExtensions":
      fields = Object.keys(ReleasedExtensions);
      break;
    case "querySoundtrackCurrentTrack":
      fields = Object.keys(SoundtrackCurrentTrack);
      break;
    case "querySoundtrackPlaylist":
      fields = Object.keys(SoundtrackPlaylist);
      break;
    case "querySoundtrackPlaylists":
      fields = Object.keys(SoundtrackPlaylists);
      break;
    case "queryStreamKey":
      fields = Object.keys(StreamKey);
      break;
    case "queryStreamTags":
      fields = Object.keys(StreamTags);
      break;
    case "queryStreams":
      fields = Object.keys(Streams);
      break;
    case "queryStreamsMarkers":
      fields = Object.keys(StreamsMarkers);
      break;
    case "queryTeams":
      fields = Object.keys(Teams);
      break;
    case "queryTopGames":
      fields = Object.keys(TopGames);
      break;
    case "queryUserActiveExtensions":
      fields = Object.keys(UserActiveExtensions);
      break;
    case "queryUserBlockList":
      fields = Object.keys(UserBlockList);
      break;
    case "queryUserExtensions":
      fields = Object.keys(UserExtensions);
      break;
    case "queryUserSubscription":
      fields = Object.keys(UserSubscription);
      break;
    case "queryUsers":
      fields = Object.keys(Users);
      break;
    case "queryUsersFollows":
      fields = Object.keys(UsersFollows);
      break;
    case "queryVideos":
      fields = Object.keys(Videos);
      break;
    default:
      fields = [];
  }
  return fields;
};

export const queryAllStreamTags = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: AllStreamTags },
      },
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html

    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryAutoModSettings = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: AutoModSettings },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryBannedUsers = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: BannedUsers },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryBitsLeaderboard = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: BitsLeaderboard },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryBlockedTerms = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: BlockedTerms },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryBroadcasterSubscriptions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: BroadcasterSubscriptions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryCategories = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Categories },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelChatBadges = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelChatBadges },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelEditors = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelEditors },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelEmotes = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelEmotes },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelInformation = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelInformation },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelStreamSchedule = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelStreamSchedule },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannelTeams = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChannelTeams },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChannels = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Channels },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryChatSettings = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ChatSettings },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryCheermotes = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Cheermotes },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryClips = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Clips },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryCreatorGoals = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: CreatorGoals },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryCustomReward = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: CustomReward  },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryCustomRewardRedemption = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: CustomRewardRedemption },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryEmoteSets = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: EmoteSets },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryExtensionAnalytics = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ExtensionAnalytics },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryExtensionLiveChannels = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ExtensionLiveChannels },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryExtensionTransactions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ExtensionTransactions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryExtensions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Extensions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryFollowedStreams = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: FollowedStreams },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryGameAnalytics = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: GameAnalytics },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryGames = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Games },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryGlobalChatBadges = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: GlobalChatBadges },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryGlobalEmotes = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: GlobalEmotes },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryHypeTrainEvents = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: HypeTrainEvents },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryModerators = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Moderators },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryPolls = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Polls },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryPredictions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Predictions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryReleasedExtensions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: ReleasedExtensions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const querySoundtrackCurrentTrack = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: SoundtrackCurrentTrack },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const querySoundtrackPlaylist = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: SoundtrackPlaylist },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const querySoundtrackPlaylists = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: SoundtrackPlaylists },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryStreamKey = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: StreamKey },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryStreamTags = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: StreamTags },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryStreams = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Streams },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryStreamsMarkers = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: StreamsMarkers },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryTeams = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Teams },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryTopGames = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: TopGames },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUserActiveExtensions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: UserActiveExtensions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUserBlockList = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: UserBlockList },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUserExtensions = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: UserExtensions },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUserSubscription = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: UserSubscription },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUsers = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Users },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryUsersFollows = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: UsersFollows },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};

export const queryVideos = ({
  stage,
  appID,
  name,
  createQuery,
  fields,
  filter,
  next,
  fieldsList,
}) => {
  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: { content: Videos },
      },
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields,
      filter,
      next,
      appId: appID,
      fieldsList: fieldsList,
    });
  }
};