function App() {
    return (
        <main className="container">

            <section className="sidebar">
                <img
                    className="photos"
                    src="/photo-1585202900225-6d3ac20a6962.avif"
                    alt="Background"
                />

                <div className="dua">
                    <img
                        className="odin-lined"
                        src="/odin-lined.png"
                        alt="Odin logo"
                    />
                    <h1 className="odin">ODIN</h1>
                </div>
            </section>

            <section className="form-section">

                <div className="parag">
                    <p>
                        This is not a real online service! You know you need
                        something like this in your life to help you realize
                        your deepest dreams.
                    </p>

                    <p>
                        Sign up <i>now</i> to get started.
                    </p>

                    <p className="know">
                        You <i>know</i> you want to.
                    </p>
                </div>

                <div className="register">
                    <h2 className="do">Let's do this!</h2>

                    <div className="form-row">
                        <div className="field">
                            <label>First Name</label>
                            <input />
                        </div>

                        <div className="field">
                            <label>Last Name</label>
                            <input />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>Email</label>
                            <input />
                        </div>

                        <div className="field">
                            <label>Phone Number</label>
                            <input />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>Password</label>
                            <input />
                        </div>

                        <div className="field">
                            <label>Confirm Password</label>
                            <input />
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
}

export default App;