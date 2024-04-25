import { MainContainer } from "../_components/containers";
import { CreatePost } from "~/app/_components/create-post";
import { Posts } from "../_components/post-containers";
export default async function Home() {
  return (
        <main className="Page2">
        <div className="BackGround">
          <div className="GridContainer">
            <div className="ColContainer">
              <div className="ColContainer2">
                <div className="ColContainer3">
                  <div className="MoreInfo">
                    For more information about our Snacks .{' '}
                    <a href="#" className="HoverColour">
                      <span className="ReadMore" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="AboutTitle">
                  Our Products
                </h1>
                <p className="ParaAbout">
                Our products enhance mental performance and well-being with scientifically-backed nootropics and supplements. We offer solutions for improved focus, memory, and overall cognitive function, helping you achieve your best mental state.
                </p>
              </div>
            </div>
            <div className="ColContainer4">
              <img
                className="FoodImage"
                src="Food2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        </main>
      );
    }

