import React from 'react';

export function Card(props) {
    return (
        <div class="roll container-fluid">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;"></div>
                <div class="card-body">
                    <h5 class="card-title">0</h5>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
    )
}