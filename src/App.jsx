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
                        something
                    </p>

                    <p>like this in your life to help you realize
                        your deepest dreams.</p>

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
                            <label>FIRST NAME</label>
                            <input type="text" required/>
                        </div>

                        <div className="field">
                            <label>LAST NAME</label>
                            <input type="text" required/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>EMAIL</label>
                            <input type="email" required />
                        </div>

                        <div className="field">
                            <label>PHONE NUMBER</label>
                            <input type="tel" required/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>PASSWORD</label>
                            <input type="password" required minLength="8" />
                        </div>

                        <div className="field">
                            <label>CONFIRM PASSWORD</label>
                            <input type="password" required minLength="8" />
                        </div>
                    </div>
                </div>

            </section>

        </main>
    );
}

export default App;