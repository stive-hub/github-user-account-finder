class Github {
    constructor() {
        this.clientId = "ffd9102a1e86c857607f"
        this.clientSecret = "5a3f3f657f93acad44b3508f08e533a1e3b05ccd"
        this.reposCount  = 5
        this.reposSort ='created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile, 
            repos
        }
    }
}

