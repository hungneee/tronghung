import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./Posts";
import { callAPI } from "./services/api.js";
import { paginate } from "./utils/helper";

import {
  Button, Container, InputGroup,
  Pagination, Row
} from "react-bootstrap";


/**
 *  căn chính gữa
 * border màu xanh 2px
 *  nền gray
 *
 */
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      ten: "Lê Hồng Sơn",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleOnChangeInput = (event) => {
    console.log(event.target.value);
    this.setState({ ten: event.target.value });
  };
  render() {
    const { nganh, email } = this.props;
    return (
      <div>
        <p className="red">Ngành: {nganh}</p>
        <input
          type="tex"
          onChange={this.handleOnChangeInput}
          placeholder="nhập tên"
        />
        <p className="red">Tên: {this.state.ten}</p>
        <p>
          email:
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </p>
      </div>
    );
  }
}

function App() {
  const [nganhName, setNganhName] = useState("UDPM");
  const limit = 8;
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("call comp");
    return () => {
      console.log("destroy comp");
    };
  }, [nganhName]);

  // const fetchAPI = useCallback(async () => {
  //   console.log("fetching api from server");
  //   const data = await callAPI(`/blogs/article?search=${keyword}`, "GET");
  //   console.log("data", data);
  // }, [keyword]);

  const handleOnChangeInput = (event) => {
    setTimeout(() => {
      setKeyword(event.target.value);
    }, [3000]);
  };

  useEffect(() => {
    fetchBlog();
  }, [keyword]);

  const fetchBlog = async () => {
    const data = await callAPI(`/blogs/article?search=${keyword || ""}`, "GET");
    setData(data);
  };
  if (data.length > 0) {
    console.log(paginate(data, limit, 5));
  }

  let items = [];
  for (let number = 1; number <= Math.ceil(data.length / limit); number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setPage(number);
        }}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }
  const handleReload = (id) => {
    console.log("id removed", id);
    const updatePost = data.filter((post) => post.id !== id);
    setData(updatePost);
  };

  return (
    <Container>
      
      <Row>
        <div className="SearchAndCreate">
          <div className="search">
            <InputGroup style={{ width: "100%" }} className="mb-2 mt-2">
              <Form.Control
                onChange={handleOnChangeInput}
                type="text"
                placeholder="what are you looking for?"
              />
              <Button>search</Button>
            </InputGroup>
          </div>
          <div className="create">
            <Button onClick={() => setIsOpen(!isOpen)} variant="primary" >
              create 
            </Button>
          </div>
            
        </div>
        <Posts
          keyword={keyword}
          onReload={handleReload}
          posts={paginate(data, limit, page)}
        />
        <Pagination>{items}</Pagination>
      </Row>
      <CreatePost isShow={isOpen} handleClose={() => setIsOpen(false)} />
    </Container>
  );
}

export default App;
