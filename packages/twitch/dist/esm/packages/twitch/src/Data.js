import { AllStreamTags } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/AllStreamTags.js';
import { AutoModSettings } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/AutoModSettings.js';
import { BannedUsers } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/BannedUsers.js';
import { BitsLeaderboard } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/BitsLeaderboard.js';
import { BlockedTerms } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/BlockedTerms.js';
import { BroadcasterSubscriptions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/BroadcasterSubscriptions.js';
import { Categories } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Categories.js';
import { ChannelChatBadges } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelChatBadges.js';
import { ChannelEditors } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelEditors.js';
import { ChannelEmotes } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelEmotes.js';
import { ChannelInformation } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelInformation.js';
import { Channels } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Channels.js';
import { ChannelStreamSchedule } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelStreamSchedule.js';
import { ChannelTeams } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChannelTeams.js';
import { ChatSettings } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ChatSettings.js';
import { Cheermotes } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Cheermotes.js';
import { Clips } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Clips.js';
import { CreatorGoals } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/CreatorGoals.js';
import { CustomReward } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/CustomReward.js';
import { CustomRewardRedemption } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/CustomRewardRedemption.js';
import { EmoteSets } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/EmoteSets.js';
import { ExtensionAnalytics } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ExtensionAnalytics.js';
import { ExtensionLiveChannels } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ExtensionLiveChannels.js';
import { Extensions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Extensions.js';
import { ExtensionTransactions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ExtensionTransactions.js';
import { FollowedStreams } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/FollowedStreams.js';
import { GameAnalytics } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/GameAnalytics.js';
import { Games } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Games.js';
import { GlobalChatBadges } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/GlobalChatBadges.js';
import { GlobalEmotes } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/GlobalEmotes.js';
import { HypeTrainEvents } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/HypeTrainEvents.js';
import { Moderators } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Moderators.js';
import { Polls } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Polls.js';
import { Predictions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Predictions.js';
import { ReleasedExtensions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/ReleasedExtensions.js';
import { SoundtrackCurrentTrack } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/SoundtrackCurrentTrack.js';
import { SoundtrackPlaylist } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/SoundtrackPlaylist.js';
import { SoundtrackPlaylists } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/SoundtrackPlaylists.js';
import { StreamKey } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/StreamKey.js';
import { Streams } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Streams.js';
import { StreamsMarkers } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/StreamsMarkers.js';
import { StreamTags } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/StreamTags.js';
import { Teams } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Teams.js';
import { TopGames } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/TopGames.js';
import { UserActiveExtensions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/UserActiveExtensions.js';
import { UserBlockList } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/UserBlockList.js';
import { UserExtensions } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/UserExtensions.js';
import { Users } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Users.js';
import { UsersFollows } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/UsersFollows.js';
import { UserSubscription } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/UserSubscription.js';
import { Videos } from '../../../node_modules/@dynamic-data/twitch-data/dist/esm/mockups/Videos.js';

/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/
var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

var getInfo = function getInfo() {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return ["queryAllStreamTags", "queryAutoModSettings", "queryBannedUsers", "queryBitsLeaderboard", "queryBlockedTerms", "queryBroadcasterSubscriptions", "queryCategories", "queryChannelChatBadges", "queryChannelEditors", "queryChannelEmotes", "queryChannelInformation", "queryChannelStreamSchedule", "queryChannelTeams", "queryChannels", "queryChatSettings", "queryCheermotes", "queryClips", "queryCreatorGoals", "queryCustomReward", "queryCustomRewardRedemption", "queryEmoteSets", "queryExtensionAnalytics", "queryExtensionLiveChannels", "queryExtensionTransactions", "queryExtensions", "queryFollowedStreams", "queryGameAnalytics", "queryGames", "queryGlobalChatBadges", "queryGlobalEmotes", "queryHypeTrainEvents", "queryModerators", "queryPolls", "queryPredictions", "queryReleasedExtensions", "querySoundtrackCurrentTrack", "querySoundtrackPlaylist", "querySoundtrackPlaylists", "queryStreamKey", "queryStreamTags", "queryStreams", "queryStreamsMarkers", "queryTeams", "queryTopGames", "queryUserActiveExtensions", "queryUserBlockList", "queryUserExtensions", "queryUserSubscription", "queryUsers", "queryUsersFollows", "queryVideos"];
};
var getModuleName = function getModuleName() {
  return "Twitch";
};
var getFields = function getFields(query) {
  var fields = [];

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
var queryAllStreamTags = function queryAllStreamTags(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AllStreamTags
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryAutoModSettings = function queryAutoModSettings(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: AutoModSettings
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryBannedUsers = function queryBannedUsers(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: BannedUsers
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryBitsLeaderboard = function queryBitsLeaderboard(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createQuery = _ref4.createQuery,
      fields = _ref4.fields,
      filter = _ref4.filter,
      next = _ref4.next,
      fieldsList = _ref4.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: BitsLeaderboard
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryBlockedTerms = function queryBlockedTerms(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createQuery = _ref5.createQuery,
      fields = _ref5.fields,
      filter = _ref5.filter,
      next = _ref5.next,
      fieldsList = _ref5.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: BlockedTerms
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryBroadcasterSubscriptions = function queryBroadcasterSubscriptions(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createQuery = _ref6.createQuery,
      fields = _ref6.fields,
      filter = _ref6.filter,
      next = _ref6.next,
      fieldsList = _ref6.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: BroadcasterSubscriptions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryCategories = function queryCategories(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createQuery = _ref7.createQuery,
      fields = _ref7.fields,
      filter = _ref7.filter,
      next = _ref7.next,
      fieldsList = _ref7.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Categories
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelChatBadges = function queryChannelChatBadges(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createQuery = _ref8.createQuery,
      fields = _ref8.fields,
      filter = _ref8.filter,
      next = _ref8.next,
      fieldsList = _ref8.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelChatBadges
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelEditors = function queryChannelEditors(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createQuery = _ref9.createQuery,
      fields = _ref9.fields,
      filter = _ref9.filter,
      next = _ref9.next,
      fieldsList = _ref9.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelEditors
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelEmotes = function queryChannelEmotes(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createQuery = _ref10.createQuery,
      fields = _ref10.fields,
      filter = _ref10.filter,
      next = _ref10.next,
      fieldsList = _ref10.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelEmotes
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelInformation = function queryChannelInformation(_ref11) {
  var stage = _ref11.stage,
      appID = _ref11.appID,
      name = _ref11.name,
      createQuery = _ref11.createQuery,
      fields = _ref11.fields,
      filter = _ref11.filter,
      next = _ref11.next,
      fieldsList = _ref11.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelInformation
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelStreamSchedule = function queryChannelStreamSchedule(_ref12) {
  var stage = _ref12.stage,
      appID = _ref12.appID,
      name = _ref12.name,
      createQuery = _ref12.createQuery,
      fields = _ref12.fields,
      filter = _ref12.filter,
      next = _ref12.next,
      fieldsList = _ref12.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelStreamSchedule
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannelTeams = function queryChannelTeams(_ref13) {
  var stage = _ref13.stage,
      appID = _ref13.appID,
      name = _ref13.name,
      createQuery = _ref13.createQuery,
      fields = _ref13.fields,
      filter = _ref13.filter,
      next = _ref13.next,
      fieldsList = _ref13.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChannelTeams
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChannels = function queryChannels(_ref14) {
  var stage = _ref14.stage,
      appID = _ref14.appID,
      name = _ref14.name,
      createQuery = _ref14.createQuery,
      fields = _ref14.fields,
      filter = _ref14.filter,
      next = _ref14.next,
      fieldsList = _ref14.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Channels
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryChatSettings = function queryChatSettings(_ref15) {
  var stage = _ref15.stage,
      appID = _ref15.appID,
      name = _ref15.name,
      createQuery = _ref15.createQuery,
      fields = _ref15.fields,
      filter = _ref15.filter,
      next = _ref15.next,
      fieldsList = _ref15.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ChatSettings
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryCheermotes = function queryCheermotes(_ref16) {
  var stage = _ref16.stage,
      appID = _ref16.appID,
      name = _ref16.name,
      createQuery = _ref16.createQuery,
      fields = _ref16.fields,
      filter = _ref16.filter,
      next = _ref16.next,
      fieldsList = _ref16.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Cheermotes
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryClips = function queryClips(_ref17) {
  var stage = _ref17.stage,
      appID = _ref17.appID,
      name = _ref17.name,
      createQuery = _ref17.createQuery,
      fields = _ref17.fields,
      filter = _ref17.filter,
      next = _ref17.next,
      fieldsList = _ref17.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Clips
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryCreatorGoals = function queryCreatorGoals(_ref18) {
  var stage = _ref18.stage,
      appID = _ref18.appID,
      name = _ref18.name,
      createQuery = _ref18.createQuery,
      fields = _ref18.fields,
      filter = _ref18.filter,
      next = _ref18.next,
      fieldsList = _ref18.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: CreatorGoals
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryCustomReward = function queryCustomReward(_ref19) {
  var stage = _ref19.stage,
      appID = _ref19.appID,
      name = _ref19.name,
      createQuery = _ref19.createQuery,
      fields = _ref19.fields,
      filter = _ref19.filter,
      next = _ref19.next,
      fieldsList = _ref19.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: CustomReward
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryCustomRewardRedemption = function queryCustomRewardRedemption(_ref20) {
  var stage = _ref20.stage,
      appID = _ref20.appID,
      name = _ref20.name,
      createQuery = _ref20.createQuery,
      fields = _ref20.fields,
      filter = _ref20.filter,
      next = _ref20.next,
      fieldsList = _ref20.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: CustomRewardRedemption
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryEmoteSets = function queryEmoteSets(_ref21) {
  var stage = _ref21.stage,
      appID = _ref21.appID,
      name = _ref21.name,
      createQuery = _ref21.createQuery,
      fields = _ref21.fields,
      filter = _ref21.filter,
      next = _ref21.next,
      fieldsList = _ref21.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: EmoteSets
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryExtensionAnalytics = function queryExtensionAnalytics(_ref22) {
  var stage = _ref22.stage,
      appID = _ref22.appID,
      name = _ref22.name,
      createQuery = _ref22.createQuery,
      fields = _ref22.fields,
      filter = _ref22.filter,
      next = _ref22.next,
      fieldsList = _ref22.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ExtensionAnalytics
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryExtensionLiveChannels = function queryExtensionLiveChannels(_ref23) {
  var stage = _ref23.stage,
      appID = _ref23.appID,
      name = _ref23.name,
      createQuery = _ref23.createQuery,
      fields = _ref23.fields,
      filter = _ref23.filter,
      next = _ref23.next,
      fieldsList = _ref23.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ExtensionLiveChannels
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryExtensionTransactions = function queryExtensionTransactions(_ref24) {
  var stage = _ref24.stage,
      appID = _ref24.appID,
      name = _ref24.name,
      createQuery = _ref24.createQuery,
      fields = _ref24.fields,
      filter = _ref24.filter,
      next = _ref24.next,
      fieldsList = _ref24.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ExtensionTransactions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryExtensions = function queryExtensions(_ref25) {
  var stage = _ref25.stage,
      appID = _ref25.appID,
      name = _ref25.name,
      createQuery = _ref25.createQuery,
      fields = _ref25.fields,
      filter = _ref25.filter,
      next = _ref25.next,
      fieldsList = _ref25.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Extensions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryFollowedStreams = function queryFollowedStreams(_ref26) {
  var stage = _ref26.stage,
      appID = _ref26.appID,
      name = _ref26.name,
      createQuery = _ref26.createQuery,
      fields = _ref26.fields,
      filter = _ref26.filter,
      next = _ref26.next,
      fieldsList = _ref26.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: FollowedStreams
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGameAnalytics = function queryGameAnalytics(_ref27) {
  var stage = _ref27.stage,
      appID = _ref27.appID,
      name = _ref27.name,
      createQuery = _ref27.createQuery,
      fields = _ref27.fields,
      filter = _ref27.filter,
      next = _ref27.next,
      fieldsList = _ref27.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GameAnalytics
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGames = function queryGames(_ref28) {
  var stage = _ref28.stage,
      appID = _ref28.appID,
      name = _ref28.name,
      createQuery = _ref28.createQuery,
      fields = _ref28.fields,
      filter = _ref28.filter,
      next = _ref28.next,
      fieldsList = _ref28.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Games
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGlobalChatBadges = function queryGlobalChatBadges(_ref29) {
  var stage = _ref29.stage,
      appID = _ref29.appID,
      name = _ref29.name,
      createQuery = _ref29.createQuery,
      fields = _ref29.fields,
      filter = _ref29.filter,
      next = _ref29.next,
      fieldsList = _ref29.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GlobalChatBadges
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGlobalEmotes = function queryGlobalEmotes(_ref30) {
  var stage = _ref30.stage,
      appID = _ref30.appID,
      name = _ref30.name,
      createQuery = _ref30.createQuery,
      fields = _ref30.fields,
      filter = _ref30.filter,
      next = _ref30.next,
      fieldsList = _ref30.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: GlobalEmotes
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryHypeTrainEvents = function queryHypeTrainEvents(_ref31) {
  var stage = _ref31.stage,
      appID = _ref31.appID,
      name = _ref31.name,
      createQuery = _ref31.createQuery,
      fields = _ref31.fields,
      filter = _ref31.filter,
      next = _ref31.next,
      fieldsList = _ref31.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: HypeTrainEvents
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryModerators = function queryModerators(_ref32) {
  var stage = _ref32.stage,
      appID = _ref32.appID,
      name = _ref32.name,
      createQuery = _ref32.createQuery,
      fields = _ref32.fields,
      filter = _ref32.filter,
      next = _ref32.next,
      fieldsList = _ref32.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Moderators
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryPolls = function queryPolls(_ref33) {
  var stage = _ref33.stage,
      appID = _ref33.appID,
      name = _ref33.name,
      createQuery = _ref33.createQuery,
      fields = _ref33.fields,
      filter = _ref33.filter,
      next = _ref33.next,
      fieldsList = _ref33.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Polls
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryPredictions = function queryPredictions(_ref34) {
  var stage = _ref34.stage,
      appID = _ref34.appID,
      name = _ref34.name,
      createQuery = _ref34.createQuery,
      fields = _ref34.fields,
      filter = _ref34.filter,
      next = _ref34.next,
      fieldsList = _ref34.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Predictions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryReleasedExtensions = function queryReleasedExtensions(_ref35) {
  var stage = _ref35.stage,
      appID = _ref35.appID,
      name = _ref35.name,
      createQuery = _ref35.createQuery,
      fields = _ref35.fields,
      filter = _ref35.filter,
      next = _ref35.next,
      fieldsList = _ref35.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: ReleasedExtensions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySoundtrackCurrentTrack = function querySoundtrackCurrentTrack(_ref36) {
  var stage = _ref36.stage,
      appID = _ref36.appID,
      name = _ref36.name,
      createQuery = _ref36.createQuery,
      fields = _ref36.fields,
      filter = _ref36.filter,
      next = _ref36.next,
      fieldsList = _ref36.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SoundtrackCurrentTrack
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySoundtrackPlaylist = function querySoundtrackPlaylist(_ref37) {
  var stage = _ref37.stage,
      appID = _ref37.appID,
      name = _ref37.name,
      createQuery = _ref37.createQuery,
      fields = _ref37.fields,
      filter = _ref37.filter,
      next = _ref37.next,
      fieldsList = _ref37.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SoundtrackPlaylist
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var querySoundtrackPlaylists = function querySoundtrackPlaylists(_ref38) {
  var stage = _ref38.stage,
      appID = _ref38.appID,
      name = _ref38.name,
      createQuery = _ref38.createQuery,
      fields = _ref38.fields,
      filter = _ref38.filter,
      next = _ref38.next,
      fieldsList = _ref38.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: SoundtrackPlaylists
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryStreamKey = function queryStreamKey(_ref39) {
  var stage = _ref39.stage,
      appID = _ref39.appID,
      name = _ref39.name,
      createQuery = _ref39.createQuery,
      fields = _ref39.fields,
      filter = _ref39.filter,
      next = _ref39.next,
      fieldsList = _ref39.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StreamKey
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryStreamTags = function queryStreamTags(_ref40) {
  var stage = _ref40.stage,
      appID = _ref40.appID,
      name = _ref40.name,
      createQuery = _ref40.createQuery,
      fields = _ref40.fields,
      filter = _ref40.filter,
      next = _ref40.next,
      fieldsList = _ref40.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StreamTags
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryStreams = function queryStreams(_ref41) {
  var stage = _ref41.stage,
      appID = _ref41.appID,
      name = _ref41.name,
      createQuery = _ref41.createQuery,
      fields = _ref41.fields,
      filter = _ref41.filter,
      next = _ref41.next,
      fieldsList = _ref41.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Streams
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryStreamsMarkers = function queryStreamsMarkers(_ref42) {
  var stage = _ref42.stage,
      appID = _ref42.appID,
      name = _ref42.name,
      createQuery = _ref42.createQuery,
      fields = _ref42.fields,
      filter = _ref42.filter,
      next = _ref42.next,
      fieldsList = _ref42.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: StreamsMarkers
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryTeams = function queryTeams(_ref43) {
  var stage = _ref43.stage,
      appID = _ref43.appID,
      name = _ref43.name,
      createQuery = _ref43.createQuery,
      fields = _ref43.fields,
      filter = _ref43.filter,
      next = _ref43.next,
      fieldsList = _ref43.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Teams
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryTopGames = function queryTopGames(_ref44) {
  var stage = _ref44.stage,
      appID = _ref44.appID,
      name = _ref44.name,
      createQuery = _ref44.createQuery,
      fields = _ref44.fields,
      filter = _ref44.filter,
      next = _ref44.next,
      fieldsList = _ref44.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: TopGames
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserActiveExtensions = function queryUserActiveExtensions(_ref45) {
  var stage = _ref45.stage,
      appID = _ref45.appID,
      name = _ref45.name,
      createQuery = _ref45.createQuery,
      fields = _ref45.fields,
      filter = _ref45.filter,
      next = _ref45.next,
      fieldsList = _ref45.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: UserActiveExtensions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserBlockList = function queryUserBlockList(_ref46) {
  var stage = _ref46.stage,
      appID = _ref46.appID,
      name = _ref46.name,
      createQuery = _ref46.createQuery,
      fields = _ref46.fields,
      filter = _ref46.filter,
      next = _ref46.next,
      fieldsList = _ref46.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: UserBlockList
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserExtensions = function queryUserExtensions(_ref47) {
  var stage = _ref47.stage,
      appID = _ref47.appID,
      name = _ref47.name,
      createQuery = _ref47.createQuery,
      fields = _ref47.fields,
      filter = _ref47.filter,
      next = _ref47.next,
      fieldsList = _ref47.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: UserExtensions
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUserSubscription = function queryUserSubscription(_ref48) {
  var stage = _ref48.stage,
      appID = _ref48.appID,
      name = _ref48.name,
      createQuery = _ref48.createQuery,
      fields = _ref48.fields,
      filter = _ref48.filter,
      next = _ref48.next,
      fieldsList = _ref48.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: UserSubscription
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUsers = function queryUsers(_ref49) {
  var stage = _ref49.stage,
      appID = _ref49.appID,
      name = _ref49.name,
      createQuery = _ref49.createQuery,
      fields = _ref49.fields,
      filter = _ref49.filter,
      next = _ref49.next,
      fieldsList = _ref49.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Users
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryUsersFollows = function queryUsersFollows(_ref50) {
  var stage = _ref50.stage,
      appID = _ref50.appID,
      name = _ref50.name,
      createQuery = _ref50.createQuery,
      fields = _ref50.fields,
      filter = _ref50.filter,
      next = _ref50.next,
      fieldsList = _ref50.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: UsersFollows
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryVideos = function queryVideos(_ref51) {
  var stage = _ref51.stage,
      appID = _ref51.appID,
      name = _ref51.name,
      createQuery = _ref51.createQuery,
      fields = _ref51.fields,
      filter = _ref51.filter,
      next = _ref51.next,
      fieldsList = _ref51.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: Videos
        }
      }
    });
  } else {
    //console.log("ActivitySummary ", fieldsList);
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

export { getFields, getInfo, getModuleName, queryAllStreamTags, queryAutoModSettings, queryBannedUsers, queryBitsLeaderboard, queryBlockedTerms, queryBroadcasterSubscriptions, queryCategories, queryChannelChatBadges, queryChannelEditors, queryChannelEmotes, queryChannelInformation, queryChannelStreamSchedule, queryChannelTeams, queryChannels, queryChatSettings, queryCheermotes, queryClips, queryCreatorGoals, queryCustomReward, queryCustomRewardRedemption, queryEmoteSets, queryExtensionAnalytics, queryExtensionLiveChannels, queryExtensionTransactions, queryExtensions, queryFollowedStreams, queryGameAnalytics, queryGames, queryGlobalChatBadges, queryGlobalEmotes, queryHypeTrainEvents, queryModerators, queryPolls, queryPredictions, queryReleasedExtensions, querySoundtrackCurrentTrack, querySoundtrackPlaylist, querySoundtrackPlaylists, queryStreamKey, queryStreamTags, queryStreams, queryStreamsMarkers, queryTeams, queryTopGames, queryUserActiveExtensions, queryUserBlockList, queryUserExtensions, queryUserSubscription, queryUsers, queryUsersFollows, queryVideos };
