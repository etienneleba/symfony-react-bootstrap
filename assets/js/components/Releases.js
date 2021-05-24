import React, {Component} from 'react';
import axios from 'axios';

class Releases extends Component {
    constructor() {
        super();
        this.state = { releases: [], loading: true};
    }

    componentDidMount() {
        this.getReleases();
    }

    getReleases() {
        axios.get(`http://localhost/api/releases`).then(releases =>
        {
            this.setState({ releases: releases.data, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Release notes</span></h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.releases.map(release =>
                                    <div className="col-md-10 offset-md-1 row-block">
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h4>{release.version}</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Releases;
