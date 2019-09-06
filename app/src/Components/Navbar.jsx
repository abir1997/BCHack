import React, { Component } from 'react';
import '../bootstrap.css';

class Navbar extends Component {
    render() {
        return (
            <div class = "container">
            <nav class="nav">
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </nav>
            </div>
        );
    }
}

export default Navbar;