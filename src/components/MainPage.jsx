import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MainPage.css';
import '../stylesheets/Bee.css';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import { Carousel } from "react-responsive-carousel";
import { Image, Reveal, Modal, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-rangeslider';
import { Parallax } from 'react-scroll-parallax';


const VALUES = ['We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...', 
                 'We study community ecology in agroecosystems...', 
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',
                 'We study community ecology in agroecosystems...',];


// render the main page of component
// this page shows at the main url http://localhost:3000/ 
class MainPage extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: 0,
      value1: 0 ,
      previous: 0
    };
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

    render() {

      const {value} = this.state;
      
      return (
        
            <div style={{background: "yellowgreen"}}>
              <nav className="navmainpage" >
                <ul className="ulmainpage">
                  <li className="limainpage" style={{color:"lightGreen"}}><a>Home</a></li>
                  <li className="limainpage" ><a>About</a></li>
                  <li className="limainpage" ><a>Contact</a></li>
                </ul>
              </nav>
              <div className="wrapmiddle">
                <Slide left>
                  <h1 className="hmainpage1"> Pollinator Identification Survey</h1>
                </Slide>
                <svg id="bee_svg" xmlns="http://www.w3.org/2000/svg" style={{padding:'0px', width:'80px', display:'inline', height:'80px'}}>
                            <g id="bee_only_group">
                                <path className="bee_paths" d="M28.89,35.79c-1.47-.35-3.46-1.6-7.07-1a8.09,8.09,0,0,0-5,3.33,24.84,24.84,0,0,0,4.41,5.75,13.66,13.66,0,0,0,1.28,1.21,4.3,4.3,0,0,1,.67.58l6.29,4a3.31,3.31,0,0,0,1,.37c.67.24,1.06.54,1.71.82l10.4,2.55a13.73,13.73,0,0,0-.13-4.71c-.09-.45-.17-.54-.26-1a3.18,3.18,0,0,0-.35-1.08c-.3-.61-.67-1.08-1-1.67l3.44.15c3.14,0,6-.11,8-3.24A8.38,8.38,0,0,0,53,40.68,14.28,14.28,0,0,0,52,30c2,0,5.51,1.36,10.77-.32a7.57,7.57,0,0,0,2.14-.82c1.17-.78,2.47-1.73,2.73-3.22.61-3.4-.07-4.69-1.19-7.25s-3.07-4.22-4.8-5.84c-1.43-1.36-4.3-2.55-4.65-3,1.84-.43,4.69.2,6.51-.22s2-3.37-.87-3.4c-4.17,0-4.69-.54-7.61.84L51.56,8.43c-.15-.63-.39-.73-.69-1.34a7.58,7.58,0,0,1-.56-1.47l7.22-2.44a2.75,2.75,0,0,0,1.15-1.23A1.73,1.73,0,0,0,58.07.22,1.45,1.45,0,0,0,57.62,0h-1.3A17.24,17.24,0,0,0,54,.78c-.63.19-1.12.3-1.8.54s-1.08.43-1.84.65c-3.31.93-4.33,1-4.15,3a16.65,16.65,0,0,0,1.54,3.46,6.87,6.87,0,0,1,.8,1.71c-3.72,2-6.19,7.61-5.3,11.4-1.45-.11-6.68-3-11.85,2.08a11.56,11.56,0,0,0-2.81,5.15,11.43,11.43,0,0,0-.35,3.57A10.62,10.62,0,0,0,28.89,35.79Z" fill="rgb(241, 208, 19)"/>
                                <path className="bee_paths" d="M0,7.83A20.89,20.89,0,0,0,.93,15l.84,2.44c.22.39.39.63.61,1.1a19.17,19.17,0,0,0,3.33,5.1,25.2,25.2,0,0,0,4.39,4l3.22,1.95a31.64,31.64,0,0,0,7.38,2.62,16.74,16.74,0,0,0,2.81.5c.5-.26.06.17.06-1.36,0-1.21.56-3.55.63-4.52a22.54,22.54,0,0,1-5.43-1.15,18.14,18.14,0,0,1-7-4.37A18.51,18.51,0,0,1,7,12.54,20.68,20.68,0,0,1,6.4,8.61C6.4,6,7.85,6.4,8.89,6.4c1.43,0,4.91,1.93,5.82,2.64s1.54,1.17,2.38,1.84a56.66,56.66,0,0,1,6.14,5.73l4.59,5.1c.26-.17,2.81-3.27,5.3-3.27C33,17.37,30.6,14.58,29.8,13.8l-2.6-2.73c-.28-.24-.37-.26-.69-.56L19.7,5.13,12.8,1.25A18.61,18.61,0,0,0,8.59,0H6.12A5.37,5.37,0,0,0,1.34,2.44a5.62,5.62,0,0,0-1,2.29c-.09.63-.11,1-.19,1.51A6.85,6.85,0,0,0,0,7.83Z" fill="rgb(241, 208, 19)"/>
                                <path className="bee_paths" d="M38.43,65.94c1.17-2.21,1.58-2.1,2.79-5.49.22-.61.5-1.56.65-2.16A21.4,21.4,0,0,1,39.6,58c-.73-.13-1.6-.17-2.34-.32A44,44,0,0,1,31.34,56c-5.36-2.16-6.88-2.9-11.59-6.55a24.89,24.89,0,0,1-3.18-3.22c-.24-.32-.43-.43-.67-.74l-1.06-1.6h-.48c-.19.82-.5,1.38-.69,2.29l-1,5.26c-.28,1.54-.48.93,1.32,3l4,3.78c1.28.86,2.34,1.82,3.68,2.55.39.22.63.35,1,.54l2.08,1.06c2,1,1.95.76,3.33,1.36.52.22.54.22,1.13.43,1.58.54,2.21.56,3.7,1A21.68,21.68,0,0,0,38.43,65.94Z" fill="rgb(241, 208, 19)"/>
                                <path className="bee_paths" d="M24.83,80V75.78c1.41,0,4.24-1.47,5.23-2.12.76-.52,1.45-1,2.12-1.47.39-.3.56-.5,1-.84s.71-.52.84-1c-2.85-.67-3.24.22-9.49-2-3.11-1.12-7.48-3.37-9.91-5.73l-1.45-1.36c-.39-.41,0-.35-.69-.39a25.37,25.37,0,0,0,1,4.76c1.56,6.32,4.61,8.09,5.06,8.82.13.22.19.41.32.63l1.25,1.71C21,77.66,23.42,80,24.83,80Z" fill="rgb(241, 208, 19)"/>
                                <path className="bee_paths"  d="M19.68,2.36,24,5a10.6,10.6,0,0,1,1.36,1c1.25,1.08.54-.35,3.53,1.15A5.63,5.63,0,0,1,30.43,8c.48.45.78.63,1.23,1.1a28.25,28.25,0,0,1,4.63,7.09c.74,1.69,0,1.28,2.55,2.14a7.62,7.62,0,0,0,1.77.56,15.2,15.2,0,0,1,1-3.37c.28-.71.06-.63-.26-1.43A20.84,20.84,0,0,0,39,9.71c-.35-.45-.52-.89-.89-1.3A28.21,28.21,0,0,0,36.07,6l-.24-.24a4.39,4.39,0,0,1-.35-.3c-2.16-2-3.76-3.53-6.64-4.61-.32-.11-.48-.22-.76-.32A7.44,7.44,0,0,0,26.17,0H23.42C22.43,0,20,1.15,19.68,2.36Z" fill="rgb(241, 208, 19)"/>
                              </g>
                          </svg>
              
                  <button type="submit" className="main-login" >
                           <Link to={'/page2'}> Get Started</Link>
                  </button>
              </div>

              <div className="mainpage1"> 
                <div className="wrappermain">
                      <div className='slider' style={{marginLeft:'40px', marginRight:'440px', height:'260px'}}>
                        <Slider
                          min={0}
                          max={4}
                          value={value}
                          onChangeStart={this.handleChangeStart}
                          onChange={this.handleChange}
                          onChangeComplete={this.handleChangeComplete}
                        />
                        {VALUES.map((text, index) => { 
                          if (index === value)
                            if (index%2===0)
                              return(
                                <Segment index={index} style={{width:"20%", height:"60%", marginLeft:index*170}}>
                                  {VALUES[value]}
                                </Segment>
                                );
                            else 
                            return(
                              <Segment index={index} style={{width:"20%", height:"60%", marginLeft:index*170, marginTop:'100px'}}>
                                {VALUES[value]}
                              </Segment>
                              );
                          })
                        }
                    </div>
                    <div className="wrappermidmain">
                    <div style={{width:'50%', height:"2.5%", float:'left'}}> 
                        <p>
                          Growing crops are essential to maintain food production around the world.  For some types of crops, insect pollinators are essential and there will be no fruits/seeds in their absence. In others, the presence of insect pollinators can be beneficial but not essential.  An example is raspberry 
                          fruits – these crops have higher yields and better quality fruits with pollinators than without. As such, ensuring adequate numbers of insect pollinators within crops around the world is an important step in securing ongoing food security. 
                          Growing crops are essential to maintain food production around the world.  For some types of crops, insect pollinators are essential and there will be no fruits/seeds in their absence. In others, the presence of insect pollinators can be beneficial but not essential.  An example is raspberry 
                          fruits – these crops have higher yields and better quality fruits with pollinators than without. As such, ensuring adequate numbers of insect pollinators within crops around the world is an important step in securing ongoing food security. 
                      
                        </p>
                    </div>
                    <div style={{width:"30%", height:"2.5%", float:'right'}}>
                      <Carousel autoPlay infiniteLoop={true} >
                        <div>
                          <img src="/images/Amegilla_bee_118.jpg" alt=""/>
                          <p className="legend">Amegilla</p>
                        </div>
                        <div>
                          <img src="/images/Amegilla_bee_106.jpg"  alt=""/>
                          <p className="legend">Amegilla</p>
                        </div>
                        <div>
                          <img src="/images/Rhiniid_fly_028.jpg"  alt=""/>
                          <p className="legend">Fly</p>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                  
                  <div className="wrappersubmain">
                    <Reveal animated='small fade' >
                      <Reveal.Content visible>
                        <Image circular size='tiny' src='/images/question.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image circular size='tiny' src='/images/A_Butterfly_277.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                    </Reveal>
                          <h4>Why Survey</h4>
                          <br/>
                            <p className="psubmain">
                                Did you know that about 90% of wild plants and 75% of... 
                            </p>
                            <Modal
                                trigger={<button type="submit" className="main-more">
                                            more details
                                         </button>}
                                header='Did you know that about 90% of wild plants and 75% of crops grown globally benefit from insect pollination?'
                                content={
                                  <div style={{overflow: 'hidden', padding: '15px'}}>
                                    
                                  <p style={{ paddingBottom: '5px', textAlign:'justify'}}>
                                  
                                  <Image style={{padding: '15px', float:'right'}} wrapped size='medium' src='/images/Megachile_bee_017.jpg' />
                                  <Image style={{padding: '15px', float:'right'}} wrapped size='medium' src='/images/Megachile_bee_001.jpg' />
                                  <Image style={{padding: '15px', float:'right'}} wrapped size='medium' src='/images/Rhiniid_fly_028.jpg' />

                                  Growing crops are essential to maintain food production around the world.  For some types of crops, insect pollinators are essential and there will be no fruits/seeds in their absence. In others, the presence of insect pollinators can be beneficial but not essential.  An example is raspberry 
                                  fruits – these crops have higher yields and better quality fruits with pollinators than without. As such, ensuring adequate numbers of insect pollinators within crops around the world is an important step in securing ongoing food security. 
                                  </p>
                                  <p style={{ paddingTop: '5px', textAlign:'justify'}}>
                                  
                                  Here in Australia we grow over 50 crops that yield best with insect pollination. While the European Honey Bee (Apis mellifera) is often used as a managed pollinator in a range of insect pollinated crops there are many other important insect crop pollinators. A range of other bee, fly, wasp, beetle, moth and butterfly species are known pollinators, and many of these insects live wild in agricultural landscapes
                                  
                                  </p>
                                  </div>}
                                
                                actions={[
                                  
                                    { key: 'done', content: 'Done', positive: true },
                                  ]}
                                // style={{ position: 'absolute',
                                //         top: '100%',
                                //         left: '50%',
                                //         transform: 'translate(-50%, -50%)',
                                //         textAlign:'justify'}}
                                />
                  </div>
                  <div className="wrappersubmain">
                    {/* <Image src='/img/Fot11.jpg' size='tiny' circular style={{marginLeft:"70px"}} />  */}
                    <Reveal animated='small fade' style={{marginLeft:"0px"}}>
                      <Reveal.Content visible>
                        <Image circular size='tiny' src='/images/survey.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image circular size='tiny' src='/images/A_wasp_550.jpg' style={{ borderStyle:"double"}}/>
                      </Reveal.Content>
                    </Reveal>
                          <h4>Survey process</h4>
                          <br/>
                            <p className="psubmain">
                              You can watch a video about the process of survey... 
                            </p>
                            <Modal
                                trigger={<button type="submit" className="main-more">
                                            more details
                                         </button>}
                                header='Below is the video cilp of survey registration process '
                                content={
                                  <div>
                                    {/* <iframe width="820" height="745" src="https://youtube/embed/jHXCpOn1bd8"> */}
                                    <iframe title="Survey video youtube link" style={{paddingLeft:'170px'}} width="731" height="411" src="https://youtube.com/embed/aRZcQ9HLjlk" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                    {/* </iframe> */}
                                  </div>}

                                actions={[
                                  
                                    { key: 'done', content: 'Done', positive: true },
                                  ]}
                                // style={{ position: 'absolute',
                                //         top: '90%',
                                //         left: '50%',
                                //         transform: 'translate(-50%, -50%)',
                                //         textAlign:'justify'}}
                                />
                  </div>
                  <div className="wrappersubmain">
                    <Reveal animated='small fade' style={{marginLeft:"0px"}}>
                      <Reveal.Content visible>
                        <Image circular size='tiny' src='/images/paper.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image circular size='tiny' src='/images/A_butterfly_239.jpg' style={{ borderStyle:"double"}}/>
                      </Reveal.Content>
                    </Reveal>
                          <h4>Acknowledgment</h4>
                          <br/>
                            <p className="psubmain">
                            Here we are running a research project to understand... 
                            </p>
                            <Modal
                                trigger={<button type="submit" className="main-more">
                                            more details
                                         </button>}
                                header='Welcome to our online insect pollinator identity survey!'
                                content={
                                <div style={{overflow: 'hidden', padding: '20px'}}>
                                <p style={{ paddingBottom: '5px', textAlign:'justify'}}>
                                
                                Here we are running a research project to understand how well computers can identify insects when compared to people.  
                                <br/>
                                <br/>
                                We have a series of photos in which participants will be asked to identify pollinator insects.  
                                <br/>
                                <br/>
                                When you are ready to begin, click the ‘Get Started’ button.  You will then be shown a series of images, one at a time, and asked to select what you believe is the identity of the insect.  You will be shown 15 separate photos.  When you see the pictures, you will have a choice of 5 insect groups to select: 
                                {/* <br/>
                                <br/> */}
                                <Image style={{padding: '15px', float:'right'}} wrapped size='medium' src='/images/FotoJet.jpg' />
                                </p>
                                <p>
                                1.	bee, 
                                <br/><br/>
                                2.	fly, 
                                <br/><br/>
                                3.	beetle,
                                <br/> <br/>
                                4.	wasp, 
                                <br/><br/>
                                5.	moth/butterfly
                                <br/>
                                <br/>
                                For each image there will also be an optional text box (labelled optional extra information) where participants can further identify the insect if they choose (e.g. to individual species or group). The 15 photos are randomly selected from a larger pool of 100 photos.  The random selection process will be automated so that each time a new survey is started; a new random set of photos will be automatically chosen.
                                <br/>
                                <br/>
                                After completing the photo identifications, each participant will be asked to rate their insect identification experience on a scale of 1 to 5 (1 no experience, and 5 highly experienced). On this same screen you be will also be asked if they have ever been involved in a citizen science project before (yes and no boxes to tick), and if yes, to enter a name or brief description of the project you were involved with.
                                <br/>
                                <br/>
                                The results from these surveys will be used to generate an accuracy rate for human observers in the identification of five insect groups (bees, flies, beetles, wasps, moths/butterflies). This accuracy rate will then be compared with the accuracy rate of the machine recognition algorithm we have developed, to test whether its accuracy levels are comparable to human observers. The machine recognition algorithm will be given the same sets of random samples of 15 images at a time to process.  The combinations of randomly selected images will be recorded each time, and these same combinations used for the algorithm.
                                
                                </p>
                                </div>}
                                actions={[
                                  
                                    { key: 'done', content: 'Done', positive: true },
                                  ]}
                                // style={{ position: 'absolute',
                                //         top: '70%',
                                //         left: '50%',
                                //         transform: 'translate(-50%, -50%)',
                                //         textAlign:'justify'}}
                                />
                  </div>
                  <div className="wrappersubmain" style={{boxShadow:"0 0px 0px rgb(95, 95, 95)"}}>
                    <Reveal animated='small fade' style={{marginLeft:"0px"}}>
                      <Reveal.Content visible>
                        <Image circular size='tiny' src='/images/lab.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image circular size='tiny' src='/images/A_Burprestid_beetle_112.jpg' style={{ borderStyle:"double"}} />
                      </Reveal.Content>
                    </Reveal>
                      <h4>Lab</h4>
                      <br/>
                        <p className="psubmain">
                           We study community ecology in agroecosystems...
                        </p>
                        <button type="submit" className="main-more">
                            <a className='alink' target='_blank' rel="noopener noreferrer"> more details</a> 
                        </button>
                  </div>

                  <Parallax
                    className="custom-class"
                    offsetYMax={40}
                    offsetYMin={-400}
                    offsetXMax={85}
                    offsetXMin={-115}
                    slowerScrollRate
                    tag="figure"
                    
                    >
                    <img src="/images/Amegilla_bee_060.png" style={{opacity:'0.5'}}  alt=""/>
                  </Parallax>

                  </div>
              </div>     
            </div>
      );
    }
  }

  MainPage.defaultProps = {
    history: {}
  }

  MainPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export  {MainPage};