export default function SkeletonCard() {
    return (
        <div className="post skeleton-wrapper">
            <div>
                {/* Category - match .category height and margin */}
                <div className="skeleton" style={{
                    width: '100px',
                    height: '24px', // approx height of text + padding
                    marginBottom: '8px'
                }}></div>

                {/* Meta info - match .post-meta */}
                <div className="skeleton" style={{
                    width: '140px',
                    height: '16px',
                    marginBottom: '5px'
                }}></div>

                <div className="skeleton" style={{
                    width: '100%',
                    maxWidth: '160px',
                    height: '110px',
                    marginTop: '8px',
                    marginBottom: '12px',
                    borderRadius: '8px'
                }}></div>

                <div className="skeleton" style={{
                    width: '90%',
                    height: '22px',
                    marginBottom: '6px'
                }}></div>
                <div className="skeleton" style={{
                    width: '60%',
                    height: '22px',
                    marginBottom: '12px'
                }}></div>

                <div className="skeleton" style={{
                    width: '100%',
                    height: '14px',
                    marginBottom: '4px'
                }}></div>
                <div className="skeleton" style={{
                    width: '95%',
                    height: '14px',
                    marginBottom: '4px'
                }}></div>
                <div className="skeleton" style={{
                    width: '85%',
                    height: '14px',
                    marginBottom: '12px'
                }}></div>

                <div className="skeleton" style={{
                    width: '130px',
                    height: '36px',
                    marginTop: '12px',
                    borderRadius: '8px'
                }}></div>
            </div>
        </div>
    );
}
