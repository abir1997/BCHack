import React, { Component } from 'react';
import '../bootstrap.css';

const ppl = [
    { Name: "Abir Ishtiaque", email: "abir.ishtiaque@yahoo.com" }
]

class MemberListComponent extends Component {
    render() {
        return (
            <div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Abir Ishtiaque
    <span class="badge badge-primary badge-pill">50%</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MemberListComponent;