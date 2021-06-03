import "../styles/UserPage.css";

import UserSidebar from "../components/UserSidebar";
import RepositoriesTab from "../components/RepositoriesTab";
import GitHubIcons from "../icons/GitHubIcons";

export default function UserPageContent(props) {
    const userData = props.userData;
    return <>
        <main className="main-content user-page">
            <div className="container">
                <UserSidebar userData={userData}/>
                <div class="main-tab-content">
                    <div className="tabs">
                        <div className="tab-item">
                            <div className="icon"><GitHubIcons icon="overview"/></div>
                            <div className="tab-name">Overview</div>
                        </div>
                        <div className="tab-item active">
                            <div className="icon"><GitHubIcons icon="repositories"/></div>
                            <div className="tab-name">Repositories <div className="badge badge-default">{userData.repositories.length}</div></div>
                        </div>
                        <div className="tab-item">
                            <div className="icon"><GitHubIcons icon="projects"/></div>
                            <div className="tab-name">Projects</div>
                        </div>
                        <div className="tab-item">
                            <div className="icon"><GitHubIcons icon="packages"/></div>
                            <div className="tab-name">Packages</div>
                        </div>
                    </div>
                    <RepositoriesTab repositories={userData.repositories}/>
                </div>
            </div>
        </main>
    </>;
}