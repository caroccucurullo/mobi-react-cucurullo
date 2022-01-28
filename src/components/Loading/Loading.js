import '../Loading/Loading.css';

export default function BarLoader() {

    return (
        <div className="spinner-container">
            <svg width="400" height="200" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="loader_bars">
                    <g id="upperbar">
                        <rect id="1_2" width="67" height="14" rx="7" fill="#000000" />
                    </g>
                    <g id="middlebar">
                        <rect id="Rectangle 2" x="20" y="18" width="67" height="14" rx="7" fill="#000000" />
                    </g>
                    <g id="bottombar">
                        <rect id="3_2" y="36" width="67" height="14" rx="7" fill="#000000" />
                    </g>
                </g>
            </svg>
            <h2>Loading</h2>
        </div>

    )
}