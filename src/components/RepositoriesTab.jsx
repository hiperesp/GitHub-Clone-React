import "../styles/RepositoriesTab.css";

import DateHelper from "../helpers/DateHelper";

export default function RepositoriesTab(props) {
    const repositories = props.repositories;
    return <>
        <div class="repositories">
            {repositories.map((repository) =>
                <div key={repository.id} class="repository">
                    <a href={repository.html_url} className="repository-title">{repository.name}</a>
                    <div className="repository-description">{repository.description}</div>
                    <div className="repository-updated-at">Updated at {DateHelper.parseDate(repository.updated_at)}</div>
                </div>
            )}
        </div>
    </>;
}