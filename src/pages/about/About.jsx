import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
// import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'
import img6 from '../../assets/images/6.png'
import img7 from '../../assets/images/7.png'
import img8 from '../../assets/images/8.png'
import img9 from '../../assets/images/9.png'
import img10 from '../../assets/images/10.png'
import img11 from '../../assets/images/11.png'
import img13 from '../../assets/images/13.png'
import img14 from '../../assets/images/14.png'
import img15 from '../../assets/images/15.png'
import img16 from '../../assets/images/16.png'
import img12 from '../../assets/images/12.png';
import './About.css'





const About = () => {

    const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]; // Add refs for each section
    const [isVisible, setIsVisible] = useState([false, false, , false, false, false, false, false]); // Initial state for each section

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observers = sectionRefs.map((ref, index) => {
            return new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && !isVisible[index]) {
                    setIsVisible((prev) => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                }
            }, options);
        });

        sectionRefs.forEach((ref, index) => {
            if (ref.current) {
                observers[index].observe(ref.current);
            }
        });

        return () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
        };
    }, [sectionRefs, isVisible]);

    // useEffect(() => console.log(isVisible), [isVisible])


    return (
        <>
            <Box
                sx={{
                    height: 'fit-content',
                    // height: '100vh',
                    backgroundColor: 'rgb(0, 47, 105)',
                    // position: 'relative'
                    display: 'flex',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                    width: '100%',
                    // overflowX: 'scroll'

                }}
            >
                <div style={{
                    margin: '5%',
                    width: '100%',
                    boxSizing: 'border-box',

                }}>
                    <Grid container spacing={{ md: 1 }} columns={{ md: 12, sm: 12, xs: 12 }} sx={{ height: '100%', marginBottom: '80px' }}>
                        <Grid item xs={12} md={12} sm={12} sx={{
                            height: '20%'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={img7}
                                    alt=''
                                    style={{ maxWidth: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ color: 'white', fontSize: '1.7rem', fontWeight: '200', marginLeft: '15px', fontFamily: 'logo, sans-serif' }}>
                                    Cryo <br /> Diffusion
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={12} sm={12} sx={{
                            height: 'fit-content',
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <Box ref={sectionRefs[0]} className='headingb' sx={{
                                width: { md: '60%', xs: '100%' },
                            }}>
                                <Typography className={isVisible[0] ? 'heading-active' : 'heading'} variant="h1"
                                    sx={{
                                        fontSize: { md: '7rem', xs: '4rem', sm: '5rem' },
                                        fontWeight: '600',
                                        letterSpacing: '0.1rem',
                                        color: 'white',
                                        fontFamily: 'heading',
                                        textAlign: 'center'
                                    }}>
                                    Cyrogenics at
                                    <Typography sx={{
                                        color: '#42b8fd',
                                        fontSize: { md: '6rem', xs: '4rem' },
                                        fontWeight: '600',
                                        letterSpacing: '0.1rem',
                                        fontFamily: 'heading'
                                    }}>your</Typography>
                                    fingertips
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={12} xs={12} sm={12} sx={{
                            height: 'fit-content ',
                        }}>
                            <div style={{ margin: '2%', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <div style={{
                                    color: '#2D5BA1',
                                    margin: '',
                                    textAlign: 'center',
                                    borderRadius: '80px',
                                    backgroundColor: 'white',
                                    width: 'fit-content',
                                    height: 'fit-content',
                                    position: 'relative',

                                    // display: 'none',
                                }}>
                                    <Typography sx={{
                                        fontSize: { md: '3rem', sm: '3rem', xs: '1.9rem' },
                                        wordSpacing: '10px',
                                        letterSpacing: '1px',
                                        padding: { md: '0 7px 0 7px', sm: '0 8px 0 8px', xs: '0px' }
                                        // marginTop: '15px'
                                    }}
                                        className="quantum">
                                        Quantum Technology
                                        <span
                                            style={{
                                                position: 'absolute',
                                                marginBottom: '12px',
                                                bottom: '0',
                                                top: '0',
                                                left: '50%', // Center the underline under the text
                                                transform: 'translateX(-52%)', // Center the underline under the text
                                                width: '78%', // Adjust the width of the underline as needed
                                                borderBottom: '2px solid', // Specify the thickness and style of the underline
                                            }}
                                        ></span>
                                    </Typography>

                                    {/* <div style={{ backgroundColor: 'black', width: '80%', height: '5px', marginBottom: '30px' }}>

                                    </div> */}
                                </div>

                            </div>
                            <div style={{
                                textAlign: 'center',
                                color: 'white',
                                margin: '10px 0 0 0',
                                fontSize: '30px',
                                // display: 'none' 
                            }}>
                                Cryo Diffusion is focused on liquid helium and specialty products that complement and extend the cryogenic equipment portfolio of Quantum Technology Corporation.
                            </div>
                        </Grid>

                    </Grid >
                </div>
            </Box >

            <Box
                sx={{
                    height: 'fit-content',
                    backgroundColor: 'rgb(238,238,240)',
                    position: 'relative',
                    display: 'flex'
                }}
            >
                <Box sx={{
                    margin: { md: '5% 18% 5% 18%', sm: '5%' }, width: { md: 'fit-content', sm: 'fit-content' },
                    // border: '1px solid'
                }}>
                    <Grid container spacing={{ md: 2, sm: 2, xs: 2 }} columns={{ md: 12, sm: 12, xs: 12 }} sx={{ height: '100%' }}>
                        <Grid item xs={12} md={12} sm={12} sx={{
                            height: { md: 'fit-content', sm: 'fit-content', marginBottom: '10%' },
                            //  border: '1px solid blue'
                        }}>
                            <Box
                                sx={{
                                    // height: '40%',
                                    // border: '1px solid',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // textAlign: "center",
                                    position: 'relative'
                                }}>
                                <div ref={sectionRefs[1]} className={isVisible[1] ? 'heading1-active' : 'heading1'}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: "center",
                                        alignItems: 'flex-start',
                                        // border: '1px solid'
                                    }}>
                                    <div style={{
                                        width: '40%',
                                        height: '4px',
                                        backgroundColor: 'rgb(0, 47, 105)',
                                        // border: '1px solid'

                                    }}></div>
                                    <Typography
                                        sx={{
                                            fontFamily: 'heading',
                                            fontSize: '3rem',
                                            color: 'rgb(0, 47, 105)',
                                            fontWeight: '200',
                                            // border: "1px solid"
                                        }}
                                    >

                                        About Cyro Diffusion
                                    </Typography>
                                </div>

                            </Box>
                            {/* <Box
                                sx={{
                                    height: '70%',
                                    border: '1px solid',
                                    fontFamily: '',
                                    fontSize: '30px'
                                }}>
                                Cryo Diffusion, founded in 1965, has gained a reputation for designing cryogenic equipment with high performance super vacuum insulation.

                                With its qualified technicians, Cryo Diffusion offers a full range of after-sales cryogenic services, including turnkey projects, installations, commissioning, routine services, maintenance, on-site calibrations, diagnostics and repairs, refurbishments, upgrades and decongestion.
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} md={6} sm={12} sx={{
                            height: { md: 'fit-content', sm: 'fit-content' },
                            //  border: '1px solid white',
                            fontSize: '1.3rem', display: 'block', color: '#002f69'
                        }}>
                            Cryo Diffusion, founded in 1965, has gained a reputation for designing cryogenic equipment with high performance super vacuum insulation.
                            With its qualified technicians, Cryo Diffusion offers a full range of after-sales cryogenic services, including turnkey projects, installations, commissioning, routine services, maintenance, on-site calibrations, diagnostics and repairs, refurbishments, upgrades and decongestion.
                            <div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} sm={12} sx={{
                            height: { md: '100%', sm: '50%' },
                            //  border: '1px solid white',
                            fontSize: '1.3rem', display: 'block', color: '#002f69'
                        }}>

                            <Box sx={{ margin: { sm: '20px', md: '0px' }, display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', textAlign: "center" }}>
                                <div>
                                    The headquarters and manufacturing plant are located in Léry, France, and include 15,000 m2 of production and office space.

                                </div>
                                <img
                                    src={img8}
                                    alt=''
                                    style={{ maxWidth: '100%', width: '60%', objectFit: 'fill', marginTop: '10px' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box
                sx={{
                    // height: { md: '100vh', sm: '200vh', xs: '300vh' },
                    height: 'fit-content',
                    backgroundColor: '#42B8FD',

                    // backgroundColor: 'rgb(238,238,240)',
                    position: 'relative',
                    display: 'flex'

                }}
            >
                <div ref={sectionRefs[2]} className={isVisible[2] ? 'section3-active' : 'section3'} style={{
                    margin: '5% 10% 5% 10%',
                    width: '90%',
                    //  border: '1px solid',
                    // opacity: 0
                }}>
                    <Grid container columns={{ md: 12, sm: 12, xs: 12 }} sx={{ height: '100%' }}>
                        <Grid item xs={12} md={12} sm={12} sx={{
                            height: 'fit-content',
                            // border: '1px solid ',
                            textAlign: 'center', marginBottom: '55px',
                        }}>
                            <Typography
                                sx={{
                                    fontFamily: 'heading',
                                    fontSize: '3rem',
                                    color: 'rgb(238,238,240)',
                                    fontWeight: '200'
                                }}
                            >

                                Count on Cryo Diffusion to meet your<br /> tank needs
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={12} sm={12} sx={{
                            height: 'fit-content',
                            //  border: '1px solid white'
                        }}>
                            <Typography
                                sx={{
                                    fontFamily: 'heading',
                                    fontSize: '1.2rem',
                                    color: 'rgb(238,238,240)',
                                    // fontWeight: '100',

                                }}
                            >

                                <ul>
                                    <li>
                                        Cryogenic equipment for "big science", including particle accelerators and laboratories, whose main products are horizontal and vertical cryostats, pipes with vacuum insulation and valves for liquid helium
                                    </li> <li>Helium dewars and transfer pipes for laboratories and nuclear magnetic resonance (NMR)
                                    </li><li>Tanks, pipes, valve boxes and loading stations for helium liquefaction plants
                                    </li><li>Hydrogen tanks, pipes with vacuum insulation and custom products for liquid hydrogen
                                    </li>
                                </ul>
                            </Typography>

                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                            sm={6}
                            sx={{
                                height: 'fit-content',
                                // border: '1px solid white',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{ margin: '30px' }}>
                                <img
                                    src={img13}
                                    alt=''
                                    style={{ maxWidth: '100%', objectFit: 'fill' }}
                                />
                            </div>

                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                            sm={6}
                            sx={{
                                height: 'fit-content',
                                // border: '1px solid white',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{ margin: '30px' }}>
                                <img
                                    src={img14}
                                    alt=''
                                    style={{ maxWidth: '100%', objectFit: 'fill' }}

                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                            sm={6}
                            sx={{
                                height: 'fit-content',
                                // border: '1px solid white',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{ margin: '30px' }}>
                                <img
                                    src={img15}
                                    alt=''
                                    style={{ maxWidth: '100%', objectFit: 'fill' }}

                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                            sm={6}
                            sx={{
                                height: 'fit-content',
                                // border: '1px solid white',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            <div style={{ margin: '30px' }}>
                                <img
                                    src={img16}
                                    alt=''
                                    style={{ maxWidth: '100%', objectFit: 'fill' }}

                                />
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </Box>

            <Box
                sx={{
                    // height: { md: '100vh', sm: '200vh', xs: '300vh' },
                    height: 'fit-content',
                    backgroundColor: 'rgb(238,238,240)',
                    position: 'relative',
                    display: 'flex'

                }}
            >
                <div style={{
                    margin: '5%', width: '90%',
                    // border: '1px solid'
                }}>

                    <Box sx={{
                        // height: '20%',
                        // border: '1px solid white',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '55px'
                    }}>

                        <div ref={sectionRefs[3]} className={isVisible[3] ? 'section4-active' : 'section4'} style={{
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start',
                            // border: '1px solid'
                        }}>
                            <div style={{ width: '30%', height: '4px', backgroundColor: 'rgb(0, 47, 105)' }}></div>
                            <Typography
                                sx={{
                                    fontFamily: 'heading',
                                    fontSize: '3rem',
                                    color: 'rgb(0, 47, 105)',
                                    fontWeight: '200'
                                }}
                            >
                                Our flagship products
                            </Typography>
                        </div>

                    </Box>

                    <Box sx={{
                        height: 'fit-content'
                    }}>
                        <Grid container columns={12} sx={{ height: '100%' }}>
                            <Grid item md={3} sm={6} xs={12} sx={{
                                // border: '1px solid green',
                                //  height: { xs: '25%', sm: '50%', md: '100%' }, 
                                height: 'fit-content',
                                width: '90%'
                            }}>
                                <div style={{
                                    margin: '5%',
                                    //  border: '1px solid'
                                }}>
                                    <div >
                                        <img
                                            src={img2}
                                            alt=''
                                            style={{ maxWidth: '100%', objectFit: 'fill' }}
                                        />
                                        <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem' }}>
                                            XRP S Series
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{ fontSize: '1.2rem', color: 'rgb(0, 47, 105)' }}
                                        >
                                            These tanks are particularly suitable for applications using argon or liquid nitrogen.

                                        </Typography>

                                    </div>
                                </div>

                            </Grid>
                            <Grid item md={3} sm={6} xs={12} sx={{
                                // border: '1px solid blue',
                                //  height: { xs: '25%', sm: '50%', md: '100%' } 
                                height: 'fit-content',

                            }}>
                                <div style={{
                                    margin: '5%',
                                    //  border: '1px solid'
                                }}>
                                    <div >
                                        <img
                                            src={img3}
                                            alt=''
                                            style={{ maxWidth: '100%', objectFit: 'fill' }}
                                        />
                                        <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem' }}>
                                            L2000                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{ fontSize: '1.2rem', color: 'rgb(0, 47, 105)' }}
                                        >
                                            The L2000 series has been specially designed for the storage and transport of liquid nitrogen.
                                        </Typography>

                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12} sx={{
                                // border: '1px solid',
                                // height: { xs: '25%', sm: '50%', md: '100%' }
                                height: 'fit-content',

                            }}>
                                <div style={{
                                    margin: '5%',
                                    //  border: '1px solid' 
                                }}>
                                    <div >
                                        <img
                                            src={img4}
                                            alt=''
                                            style={{ maxWidth: '100%', objectFit: 'fill' }}
                                        />
                                        <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem' }}>
                                            NMH helium series
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{ fontSize: '1.2rem', color: 'rgb(0, 47, 105)' }}
                                        >
                                            NMH series tanks are intended for the storage and transportation of liquid helium.
                                        </Typography>

                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12} sx={{
                                //  border: '1px solid',
                                height: { xs: '25%', sm: '50%', md: '100%' }
                            }}>
                                <div style={{
                                    margin: '5%',
                                    // border: '1px solid'
                                }}>
                                    <div >
                                        <img
                                            src={img5}
                                            alt=''
                                            style={{ maxWidth: '100%', objectFit: 'fill' }}
                                        />
                                        <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem' }}>
                                            Transfer line
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <Typography
                                            sx={{ fontSize: '1.2rem', color: 'rgb(0, 47, 105)' }}
                                        >
                                            Cryo Diffusion offers a complete range of tailor-made super-insulated vacuum transfer lines, whether rigid or flexible / single or multilines
                                        </Typography>

                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            </Box>

            <Box sx={{
                height: { md: '90vh', sm: '150vh', xs: '200vh' },
                backgroundColor: 'white',
                display: 'flex',
                padding: { md: '5% 0 5% 0', sm: '5% 30% 5% 30%' }
            }}>
                <Box style={{ width: '100%' }}>
                    <Grid ref={sectionRefs[4]} className={isVisible[4] ? 'blue-active' : 'blue'} container columns={12} sx={{ height: '100%' }}>
                        <Grid item md={4} sm={12}
                            sx={{
                                backgroundColor: '#42B8FD',
                                display: 'flex ',
                                alignItems: 'center',
                                justifyContent: "center",
                                // width: '0px'
                            }}>
                            <Typography
                                sx={{
                                    position: 'relative',
                                    fontSize: '3rem',
                                    fontFamily: 'heading',
                                    color: 'rgb(238,238,240)',

                                }}>
                                54 Employees

                            </Typography>

                        </Grid>
                        <Grid item md={4} sm={12} sx={{ backgroundColor: '#EEEEF0', justifyContent: "center", display: 'flex ', alignItems: 'center' }}>
                            <Typography sx={{ position: 'relative', fontSize: '3rem', fontFamily: 'heading', color: '#002f69' }}>

                                58 Years of activities
                            </Typography>

                        </Grid>
                        <Grid item md={4} sm={12} sx={{ backgroundColor: '#002f69', textAlign: 'center', display: 'flex ', alignItems: 'center' }}>
                            <Typography sx={{ position: 'relative', fontSize: '3rem', fontFamily: 'heading', color: '#42B8FD' }}>

                                10,000 m2 of workshops
                            </Typography>

                        </Grid>

                    </Grid>
                </Box>

            </Box >

            <Box sx={{
                // height: '100%',
                border: '1px solid',
                // width: '100%',
                padding: '5% 14% 5% 14%',
                position: 'relative',
                backgroundColor: 'rgb(0, 47, 105)',
                // height: { md: '300vh', sm: '300vh', xs: '500vh' },
                height: 'fit-content'

            }}>
                {/* <Box sx={{
                        height: '20%',
                        border: '1px dotted white'
                    }}>

                    </Box> */}
                <Grid container columns={12}
                    sx={{
                        // height: { md: '25%', sm: '25%', xs: '30%' }
                        height: '100%'
                    }}>
                    <Grid item md={12} sm={12} xs={12} sx={{ height: { md: '5%', sm: '5%', xs: '4%' } }}>
                        <div ref={sectionRefs[5]} className={isVisible[5] ? "section4-active" : 'section4'} style={{
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start',
                            // border: '1px solid'
                        }}>
                            <div style={{ width: '30%', height: '4px', backgroundColor: 'white' }}></div>
                            <Typography
                                sx={{
                                    fontFamily: 'heading',
                                    fontSize: '3rem',
                                    color: 'white',
                                    fontWeight: '200'
                                }}
                            >
                                Our products from 60L to 200L:
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{
                        // border: '1px dotted white',
                        // height: { md: '25%', sm: '25%', xs: '15%' }
                        height: 'fit-content'
                    }}>
                        <div style={{
                            margin: ' 5% 15% 5% 15%',
                            // border: '1px solid white',
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'
                        }}>
                            <div>
                                <img
                                    src={img9}
                                    alt=''
                                    style={{ maxWidth: '90%', objectFit: 'fill' }}
                                />
                                <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem', color: 'white' }}>
                                    XRP S Series
                                </div>
                            </div>
                            <div>
                                <Typography
                                    sx={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}
                                >
                                    These tanks are particularly suitable for applications using argon or liquid nitrogen.
                                </Typography>
                            </div>
                            <Box sx={{ width: '50%', backgroundColor: 'white', height: 'fit-content', textAlign: 'center', padding: '5px', margin: '10px', fontSize: { md: '1rem', sm: '0.7rem', xs: '0.5rem' } }}>
                                Download the description sheet
                            </Box>
                        </div>

                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{
                        // border: '1px dotted white',
                        height: { md: '25%', sm: '25%', xs: '15%' }
                    }}>
                        <div style={{
                            margin: ' 5% 15% 5% 15%',
                            //  border: '1px solid white',
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'
                        }}>
                            <div>
                                <img
                                    src={img10}
                                    alt=''
                                    style={{ maxWidth: '90%', objectFit: 'fill' }}
                                />
                                <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem', color: 'white' }}>
                                    RBP VLN Series
                                </div>
                            </div>
                            <div>
                                <Typography
                                    sx={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}
                                >
                                    These tanks are particularly suitable for multiple uses in the liquid form of Nitrogen and Argon.
                                </Typography>
                            </div>
                            <Box sx={{ width: '50%', backgroundColor: 'white', height: 'fit-content', textAlign: 'center', padding: '5px', margin: '10px', fontSize: { md: '1rem', sm: '0.7rem', xs: '0.5rem' } }}>
                                Download the description sheet
                            </Box>
                        </div>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} sx={{ height: { md: '5%', sm: '5%', xs: '4%' } }}>
                        <div ref={sectionRefs[6]} className={isVisible[6] ? "section4-active" : 'section4'} style={{
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start',
                            //  border: '1px solid'
                        }}>
                            <div style={{ width: '30%', height: '4px', backgroundColor: 'white' }}></div>
                            <Typography
                                sx={{
                                    fontFamily: 'heading',
                                    fontSize: '3rem',
                                    color: 'white',
                                    fontWeight: '200'
                                }}
                            >
                                Our 3000L products:
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{
                        // border: '1px dotted white',
                        height: { md: '25%', sm: '25%', xs: '15%' }
                    }}>
                        <div style={{
                            margin: ' 5% 15% 5% 15%',
                            //  border: '1px solid white',
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'
                        }}>
                            <div>
                                <img
                                    src={img11}
                                    alt=''
                                    style={{ maxWidth: '90%', objectFit: 'fill' }}
                                />
                                <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem', color: 'white' }}>
                                    CRYOCYL
                                </div>
                            </div>
                            <div>
                                <Typography
                                    sx={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}
                                >
                                    Superinsulated tanks for gas: LN2, LO2, Lar and LCO2.
                                    {/* This tank meets the demands of the gas and oil industries, with the best performance on the market. The cryopack was designed for offshore applications.   */}
                                </Typography>
                            </div>
                            <Box sx={{ width: '50%', backgroundColor: 'white', height: 'fit-content', textAlign: 'center', padding: '5px', margin: '10px', fontSize: { md: '1rem', sm: '0.7rem', xs: '0.5rem' } }}>
                                Download the description sheet
                            </Box>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{
                        // border: '1px dotted white',
                        height: { md: '25%', sm: '25%', xs: '15%' }
                    }}>
                        <div style={{
                            margin: ' 5% 15% 5% 15%',
                            // border: '1px solid white', 
                            display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'
                        }}>
                            <div>
                                <img
                                    src={img12}
                                    alt=''
                                    style={{ maxWidth: '90%', objectFit: 'fill' }}
                                />
                                <div style={{ textAlign: 'center', fontFamily: 'heading', letterSpacing: '0.1rem', fontSize: '1.2rem', color: 'white' }}>
                                    CRYOPACK
                                </div>
                            </div>
                            <div>
                                <Typography
                                    sx={{ fontSize: '1.2rem', color: 'white', textAlign: 'center' }}
                                >
                                    This tank meets the demands of the gas and oil industries, with the best performance on the market. The cryopack was designed for offshore applications.                                </Typography>
                            </div>
                            <Box sx={{ width: '50%', backgroundColor: 'white', height: 'fit-content', textAlign: 'center', padding: '5px', margin: '10px', fontSize: { md: '1rem', sm: '0.7rem', xs: '0.5rem' } }}>
                                Download the description sheet
                            </Box>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}
                        sx={{
                            // border: '1px dotted white',
                            height: { md: '25%', sm: '25%', xs: '15%' }
                        }}>
                        <div style={{ height: '10%', display: 'flex', alignItems: 'center', justifyContent: "flex-start", color: 'white', marginBottom: '10px' }}>
                            <img
                                src={img7}
                                alt=''
                            />
                            <Typography sx={{
                                fontSize: '1.3rem'
                            }}>
                                CRYO DIFFUSION

                            </Typography>
                        </div>
                        <div style={{ height: '80%' }}>
                            <img
                                src={img6}
                                alt=''
                                style={{ maxWidth: '100%', objectFit: 'fill' }}
                            />
                        </div>

                    </Grid>
                    <Grid item md={6} sm={6} xs={12} sx={{
                        // border: '1px dotted white',
                        height: { md: '25%', sm: '25%', xs: '15%' }
                    }}>
                        <div style={{ color: 'white', margin: '10%', fontSize: '1.2rem' }}>
                            <Typography style={{ fontSize: '2rem', fontWeight: '800' }}>
                                Seat
                            </Typography> <br />

                            49 Rue de Verdun <br />
                            27690 Léry<br />
                            <br />
                            <br />

                            Such. (+33) 2 32 59 03 68<br />
                            Email: info@cryodiffusion.fr<br />
                            <br />
                            <br />

                            <Typography style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                                OFFICE HOURS<br />
                            </Typography> <br />
                            Monday to Friday<br />
                            8:00 a.m. to 12:00 p.m. / 1:00 p.m. to 5:00 p.m.<br />
                            <br />
                            <br />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                                SOCIAL MEDIA<br />
                            </Typography> <br />

                        </div>



                    </Grid>

                </Grid>

                {/* </Box> */}

                {/* <Box sx={{
                    height: '33%',
                    border: '1px solid'
                }}>

                    <Box sx={{
                        height: '20%',
                        border: '1px dotted white'
                    }}>

                    </Box>
                    <Grid container columns={12}
                        sx={{
                            height: '80%'
                        }}>
                        <Grid item md={6} sm={6} xs={12} sx={{ border: '1px dotted white', height: '100%' }}>
                            1
                        </Grid>
                        <Grid item md={6} sm={6} xs={12} sx={{ border: '1px dotted white', height: '100%' }}>
                            2
                        </Grid>

                    </Grid>
                </Box> */}
                {/* </div > */}

            </Box >

            <Box
                sx={{
                    height: '15vh',
                    backgroundColor: 'black',
                    position: 'relative',
                    // padding: '%'
                }}
            >
                <div style={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '80%',
                    height: '100%',
                    marginLeft: '20px',
                    // fontFamily: 'heading'
                }}>
                    Terms & Support
                </div>
            </Box >

            <div style={{ display: 'none' }}>

            </div>

        </>
    )
}
export default About;