import React, { useState } from "react";
import Navbar from "../../components/navBar";
import Modal from "../../components/Modal/Modal";
import "./calender.css";

const Calender = () => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState({});

  const handelOnClick = (content) => {
    setModal(true);
    setContent(content);
  };
  return (
    <>
      <Navbar />
      <div className="calender__container">
        <table>
          <thead>
            <tr>
              <th colSpan="7" className="month">
                October 2023
              </th>
            </tr>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td
                className="event"
                onClick={() =>
                  handelOnClick({
                    title: "First Play",
                    description: "This is the first event",
                    NameOfCity: "Genova",
                    location: "https://maps.app.goo.gl/Wgin5NsyPj8fmjt29",
                    date: "2021-10-01",
                    img: "https://www.visitgenoa.it/sites/default/files/archivio/img/Teatro-Gustavo-Modena-news.jpg",
                  })
                }
              >
                17
              </td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
            </tr>
          </tbody>
        </table>
        <Modal modal={modal} setModal={setModal} content={content} />
      </div>
    </>
  );
};

export default Calender;
