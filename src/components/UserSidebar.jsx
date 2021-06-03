import '../styles/UserSidebar.css';

import GitHubIcons from '../icons/GitHubIcons';

export default function UserSidebar(props) {
    const userData = props.userData;
    return <>
        <div className="user-sidebar-container">
            <div className="user-sidebar">
                <div className="user-photo">
                    <img src={userData.info.avatar_url} alt={`Foto de ${userData.info.name}`}/>
                </div>
                <div className="user-info-section">
                    <div className="user-title">{userData.info.name}</div>
                    <div className="user-subtitle">{userData.info.login}</div>
                    <a href="/" className="button-default user-follow-button">Follow</a>
                    <div className="user-stats">
                        <div className="user-stat">
                            <div className="icon"><GitHubIcons icon="group"/></div>
                            <div className="user-stat-value">{userData.followers.length}</div>
                            <div className="user-stat-title">followers</div>
                            <div className="user-stat-separator"></div>
                            <div className="user-stat-value">{userData.following.length}</div>
                            <div className="user-stat-title">following</div>
                        </div>
                        <div className="user-stat-separator"></div>
                        <div className="user-stat">
                            <div className="icon"><GitHubIcons icon="star"/></div>
                            <div className="user-stat-value">{userData.subscriptions.length}</div>
                        </div>
                    </div>
                    <div className="user-links">
                        {userData.info.company?
                            <div className="user-link">
                                <div className="icon"><GitHubIcons icon="organization"/></div>
                                <div className="user-link-text">{userData.info.company}</div>
                            </div>
                        :null}
                        {userData.info.company?
                            <div className="user-link">
                                <div className="icon"><GitHubIcons icon="location"/></div>
                                <div className="user-link-text">{userData.info.company}</div>
                            </div>
                        :null}
                        <div className="user-link">
                            <div className="icon"><GitHubIcons icon="mail"/></div>
                            <div className="user-link-text">Sign in to view email</div>
                        </div>
                        <div className="user-link">
                            <div className="icon"><GitHubIcons icon="link"/></div>
                            <a href={userData.info.html_url} className="user-link-link">{userData.info.html_url}</a>
                        </div>
                    </div>
                </div>
                <div className="user-info-section">
                    <div className="section-title">Achievements</div>
                    <div className="user-info-section-content">
                        <div className="achievement">
                            <img src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png" alt="Arctic Code Vault Contributor"/>
                        </div>
                        <div className="achievement">
                            <img src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png" alt="Arctic Code Vault Contributor"/>
                        </div>
                    </div>
                </div>
                <div className="user-info-section">
                    <div className="section-title">Highlights</div>
                    <div className="user-info-section-content">
                        <div className="highlight">
                            <div className="icon"><GitHubIcons icon="star"/></div>
                            <div className="badge badge-purple">PRO</div>
                        </div>
                        <div className="highlight">
                            <div className="icon"><GitHubIcons icon="star"/></div>
                            <div className="badge badge-purple">PRO</div>
                        </div>
                    </div>
                </div>
                {userData.organizations.length > 0 ?
                    <div className="user-info-section">
                        <div className="section-title">Organizations</div>
                        <div className="user-info-section-content">
                            {userData.organizations.map((organization) =>
                                <div key={organization.id} className="organization">
                                    <img src={organization.avatar_url} alt={organization.login}/>
                                </div>
                            )}
                        </div>
                    </div>
                :null}
                <a href="/" className="user-info-action">Block or Report</a>
            </div>
        </div>
    </>;
}