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
                  About Us
                </h1>
                <p className="ParaAbout">
                Founded in 2021, we created our line of nootropics and supplements to address the growing need for sustainable mental performance solutions. Inspired by the potential of natural compounds to enhance cognitive function, our ambition is to empower individuals to achieve peak mental clarity and wellness. We are committed to advancing brain health research and delivering products that support individuals in reaching their fullest potential.
                </p>
              </div>
            </div>
            <div className="ColContainer4">
              <img
                className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                src="Food1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        </main>
      );
    }

