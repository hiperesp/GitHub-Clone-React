export default class GitHubApi {
    static getUserUrl(username, endpoint = "") {
        return `https://api.github.com/users/${encodeURI(username)}${endpoint}`;
    }
    static async fetch(fullUrl) {
        return await fetch(fullUrl).then((data) => data.json());
    }
    static async fetchUser(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username));
    }
    static async fetchRepositories(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username, '/repos'));
    }
    static async fetchFollowers(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username, '/followers'));
    }
    static async fetchFollowing(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username, '/following'));
    }
    static async fetchSubscriptions(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username, '/subscriptions'));
    }
    static async fetchOrganizations(username) {
        return GitHubApi.fetch(GitHubApi.getUserUrl(username, '/orgs'));
    }
    static async fetchFullUser(username) {
        return {
            info: await GitHubApi.fetchUser(username),
            repositories: await GitHubApi.fetchRepositories(username),
            followers: await GitHubApi.fetchFollowers(username),
            following: await GitHubApi.fetchFollowing(username),
            subscriptions: await GitHubApi.fetchSubscriptions(username),
            organizations: await GitHubApi.fetchOrganizations(username),
        }
    }
    static getFullUserStructure() {
        return {
            info: {},
            repositories: [],
            followers: [],
            following: [],
            subscriptions: [],
            organizations: [],
        }
    }
}
