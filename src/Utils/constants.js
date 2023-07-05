const Google_APIKey = "AIzaSyBGXwGuvJ6BeDdYnZOMvkBBe0_Fz8o85Rs";

export const Youtube_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_APIKey;

export const Youtube_Search_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${Google_APIKey}&q=`;

export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${Google_APIKey}&videoId=V9wgzIn-VNE`;

export const LiveChat_API = `https://youtube.googleapis.com/youtube/v3/liveChat/messages?key=${Google_APIKey}`;

export const LIVE_CHAT_COUNT = 50;
