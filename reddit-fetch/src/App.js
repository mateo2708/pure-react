import React, { Component } from "react";
import axios from "axios";

function App() {
  return (
    <ErrorBoundary>
      <Reddit subreddit="reactjs" />
    </ErrorBoundary>
  );
}

class ErrorBoundary extends Component {
  state = {
    error: null,
  };
  componentDidCatch(error, info) {
    console.log("Este es el error socio:", error);
    this.setState({ error: info.componentStack });
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Socio tiene un error</h1>
          <p>{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

class Reddit extends Component {
  state = {
    posts: [],
    error: null,
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((res) => {
        console.log("HTTP Response", res);

        const posts = res.data.data.children.map((obj) => obj.data);
        this.setState({ posts });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }
  render() {
    const posts = this.state.posts;
    if (this.state.error) {
      throw new Error(this.state.error);
    }
    if (this.state.isLoading) {
      return <h1>Socio que espere que está cargando</h1>;
    }
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
