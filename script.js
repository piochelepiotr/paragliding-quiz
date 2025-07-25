// Quiz data structure
const quizData = [
    {
        id: 1,
        question: "You have launched and are flying away from the hill in smooth air with the brake position at trim when you notice you are not making headway over the ground. You should be concerned about stalling.",
        type: "single",
        options: [
            "True, because you can stall, regardless of brake position",
            "True, because when your ground speed is slow you are close to stalling",
            "False, because it is only your ground speed that is low",
            "False, because modern canopies do not stall"
        ],
        correct: [2],
        explanation: "Ground speed and airspeed are different. Low ground speed due to headwind doesn't necessarily mean you're close to stalling if your airspeed is maintained at trim."
    },
    {
        id: 2,
        question: "Would you be wise to use your speed bar if you are coming in to land and you are not making forward progress across the ground?",
        type: "multiple",
        options: [
            "Yes, there is no reason not to. Positive ground speed is the most important thing.",
            "Generally no because fundamentally, gliders are more prone to deflation and slower to recover when speed bar is engaged. Because you are low, you can't risk deflation. Accept the negative ground speed and disable the glider quickly after safely landing into the wind.",
            "If you are being blown backward toward any imminent hazard then consider pushing some amount of speed bar to provide a wider safety margin from the hazard."
        ],
        correct: [1, 2],
        explanation: "Speed bar should generally be avoided when low to the ground due to increased deflation risk, but may be necessary if being blown toward hazards."
    },
    {
        id: 3,
        question: "According to USHPA's Pilot Proficiency Program (SOP 12-02) Novice (P2) Paraglider Pilots:",
        type: "multiple",
        options: [
            "Have finished supervised instruction, and from now on will be learning on their own",
            "Are qualified to fly solo, without direct instructor supervision, within significant operating limitations",
            "Understand the paragliding rating system and recommended operating limitations"
        ],
        correct: [1, 2],
        explanation: "P2 pilots can fly solo within limitations and understand the rating system."
    },
    {
        id: 4,
        question: "According to the USHPA's Pilot Proficiency Program (SOP 12-02) as a Novice (P2) rated pilot, you:",
        type: "single",
        options: [
            "Should not fly if any clouds are present",
            "Should fly only sites which permit continuous visual contact with a landing area"
        ],
        correct: [1],
        explanation: "Novice pilots should maintain visual contact with landing areas for safety."
    },
    {
        id: 5,
        question: "According to the USHPA Recommended Operating Limitations, recently certified Novice pilots should not fly in thermals where average climb rates exceed 200 feet per minute:",
        type: "single",
        options: [
            "Before acquiring a full understanding of the dangers involved",
            "Until they have practiced in-air reserve deployments",
            "Until they have practiced full stalls and spins while flying"
        ],
        correct: [0],
        explanation: "Novice pilots should understand thermal dangers before flying in strong thermals."
    },
    {
        id: 6,
        question: "You are ridge soaring, with the ridge on your left, and another paraglider is approaching head on.",
        type: "multiple",
        options: [
            "You have the right of way and the other pilot should alter course to their left",
            "The other glider has the right of way (because they may not be able to alter course to their right)",
            "The wing closer to the hill has the right of way",
            "You should alter course to the right",
            "Right of way rules are the best guideline but all situations are unique and not all pilots honor the rules in all situations; be flexible when the situation dictates"
        ],
        correct: [1, 3, 4],
        explanation: "The other glider has right of way (they may not be able to alter course to their right), you should alter course to the right, and be flexible as situations vary."
    },
    {
        id: 7,
        question: "When flying in a thermal:",
        type: "multiple",
        options: [
            "All pilots should circle to the right",
            "All pilots should circle the same way",
            "The first pilot in the thermal determines the direction of circling",
            "The higher pilot has the right of way"
        ],
        correct: [1, 2],
        explanation: "All pilots should circle the same direction, with the first pilot determining direction. The lower pilot has the right of way, not the higher pilot."
    },
    {
        id: 8,
        question: "You can minimize the possibility of an accidental stall or spin:",
        type: "single",
        options: [
            "By avoiding sharp and deep brake inputs while flying",
            "By flying only in smooth air",
            "By flying a certified canopy",
            "By flying with a trimmer system"
        ],
        correct: [0],
        explanation: "Smooth brake inputs help prevent accidental stalls and spins."
    },
    {
        id: 9,
        question: "Performing 360 degree turns and attempting to climb when close to the terrain can be dangerous because:",
        type: "multiple",
        options: [
            "You may drift downwind into the terrain",
            "You could run into unexpected sink and drop quickly",
            "You may spin your glider by initiating an aggressive turn to avoid the terrain"
        ],
        correct: [0, 1, 2],
        explanation: "All these factors make terrain-proximate turns dangerous."
    },
    {
        id: 10,
        question: "Performing 360 degree turns in a steep bank angle, using a lot of brake can be dangerous because:",
        type: "multiple",
        options: [
            "A prolonged, spiral turn can lead to excessive speed",
            "A deep input the glider may cause a spin",
            "You may drift downwind into the hill",
            "You may become dizzy and disoriented"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All these factors contribute to the danger of steep bank angle turns."
    }
];

// Continue with more questions...
const additionalQuestions = [
    {
        id: 11,
        question: "A pilot has entered a spiral, either intentionally or unintentionally. There is no indication that the glider will exit the spiral (locked-in spiral). After how many rotations should the pilot throw their reserve?",
        type: "single",
        options: [
            "After one rotation.",
            "After two rotations.",
            "The amount of rotations doesn't matter. It depends on altitude above ground, and/or if there is any feeling of blacking out from the pilot.",
            "Just go hands up, all gliders exit if you do."
        ],
        correct: [2],
        explanation: "The decision to deploy reserve depends on altitude and pilot condition, not number of rotations."
    },
    {
        id: 12,
        question: "When you buy a certified canopy it means:",
        type: "single",
        options: [
            "Your canopy has been tested and proven to be safe in all conditions",
            "The canopy design has undergone a specific set of tests designed to measure flight characteristics which could be good for beginners or exclusively for competition pilots depending on the certification level",
            "The canopy has been shown to recover from collapses in every instance without the need for pilot input"
        ],
        correct: [1],
        explanation: "Certification means the canopy has been tested for specific flight characteristics, not that it's safe in all conditions."
    },
    {
        id: 13,
        question: "You are ridge soaring, flying at minimum sink and close to the hill. You are also in a mild crosswind, and flying on the downwind leg. Your ground speed is high. You should:",
        type: "single",
        options: [
            "Slow down a little and be prepared to flare hard in case you need to land",
            "Move away from the hill and resist the temptation to slow down",
            "Slow down a little to improve your sink rate and increase terrain clearance"
        ],
        correct: [1],
        explanation: "High ground speed in crosswind requires moving away from the hill rather than slowing down."
    },
    {
        id: 14,
        question: "A paraglider's EN certified weight range includes which components?",
        type: "single",
        options: [
            "Just the pilot, clothing included",
            "The pilot in flying gear including the harness weight; the wing is not included",
            "The total weight of the pilot, plus all gear and the wing"
        ],
        correct: [2],
        explanation: "EN weight range includes the total weight of the pilot, plus all gear and the wing."
    },
    {
        id: 15,
        question: "Your launch point is halfway up the side of the mountain from which you are flying. You have not been to the top of the hill, but the wind at launch is blowing in straight upslope. Which of the following is true?",
        type: "multiple",
        options: [
            "The wind at the top of the hill may be in the opposite direction",
            "The wind you are feeling at launch might be a rotor",
            "There could be severe turbulence directly out in front of launch"
        ],
        correct: [0, 1, 2],
        explanation: "All these conditions are possible when launching from mid-slope."
    },
    {
        id: 16,
        question: "You are launching from halfway up the mountain, and you have checked that the wind in the landing area is blowing in the same direction as the wind at your launch. Which of the following is true?",
        type: "multiple",
        options: [
            "The wind at the top of the hill may be in the opposite direction",
            "The wind you are feeling at launch might be a rotor",
            "There could be severe turbulence directly out in front of launch"
        ],
        correct: [0, 1, 2],
        explanation: "Even with consistent wind direction, these conditions are still possible."
    },
    {
        id: 17,
        question: "Paragliders will suffer ultraviolet degradation to the cloth sufficient to compromise your safety in:",
        type: "single",
        options: [
            "300 hours of flying",
            "300 hours of total sunlight exposure",
            "Whatever sunlight exposure causes noticeable fading of the fabric",
            "Some number of hours of total ultraviolet exposure that depends on the intensity of the radiation and the original quality and construction of the fabric"
        ],
        correct: [3],
        explanation: "UV degradation depends on multiple factors including radiation intensity and fabric quality."
    },
    {
        id: 18,
        question: "When making a landing approach when there are hazards like trees or fences nearby:",
        type: "multiple",
        options: [
            "Look at the hazards to avoid them",
            "Consciously avoid fixating on the hazard (focusing on a hazard has a tendency to interfere with flying away from it)",
            "Maintain awareness of airspeed at all times",
            "Look in the direction you are planning to land and in the direction of your turns prior to turning"
        ],
        correct: [1, 2, 3],
        explanation: "Focus on where you want to go, not the hazards, and maintain airspeed awareness."
    },
    {
        id: 19,
        question: "Launching in higher winds requires:",
        type: "multiple",
        options: [
            "More airspeed",
            "A higher angle of attack",
            "A specific set of high wind launch skills",
            "More brake application",
            "A steeper slope"
        ],
        correct: [1],
        explanation: "High wind launches require a higher angle of attack."
    },
    {
        id: 20,
        question: "In smooth, light winds, on a clear open launch with no obstructions upwind, USHPA recommends that novice pilots limit themselves to launching in crosswinds of:",
        type: "single",
        options: [
            "10 degrees",
            "25 degrees",
            "45 degrees",
            "No crosswind at all"
        ],
        correct: [0],
        explanation: "USHPA recommends novice pilots limit crosswind launches to 10 degrees."
    },
    {
        id: 21,
        question: "Your paraglider at 20 mph has a glide ratio of 8:1 according to the manufacturer. You are 300 feet above the elevation of the landing area, gliding with no brake pressure into a 10 mph headwind, over flat ground. There is no significant vertical movement in the air. In theory, you can expect to travel about how far forward over the ground before you land:",
        type: "single",
        options: [
            "300 feet",
            "2400 feet",
            "1200 feet",
            "900 feet",
            "There is no way to estimate"
        ],
        correct: [2],
        explanation: "With 8:1 glide ratio and 300 feet altitude, theoretical distance is 2400 feet, but 10 mph headwind reduces this to approximately 1200 feet."
    },
    {
        id: 22,
        question: "You are flying with an 8 -10 mph tailwind and are gliding back towards the landing area. You are not sure you have altitude to make it. There is no significant vertical movement in the air. To maximize your chances of reaching the landing area you should fly:",
        type: "single",
        options: [
            "At slower than trim speed",
            "At trim speed",
            "At faster than trim speed"
        ],
        correct: [0],
        explanation: "Flying slower than trim speed maximizes glide distance when trying to reach the landing area in a tailwind."
    },
    {
        id: 23,
        question: "If you are flying very deep in the brakes (hands low, or with multiple wraps), you will know if you are about to experience a stall of your paraglider because:",
        type: "multiple",
        options: [
            "A hands below the seat brake position corresponds with an impending stall",
            "The paraglider will be so deformed that it can no longer continue to fly",
            "Stall can happen inadvertently and brake position has no bearing on stall likelihood",
            "A paraglider will only stall when the glider is way behind the pilot and the pilot feels as though he/she has been swung on his/her back"
        ],
        correct: [0, 1],
        explanation: "Deep brake positions can lead to stalls, and stalls can happen inadvertently."
    },
    {
        id: 24,
        question: "What is the first thing to do if you suffer an asymmetric collapse in flight?",
        type: "multiple",
        options: [
            "Maintain a safe heading with weight shift and/or opposite brake for directional control, and avoid over-controlling",
            "Apply brakes aggressively on the opposite side to re-inflate",
            "Apply brakes aggressively on the collapsed side to re-inflate",
            "Deploy your reserve parachute",
            "Release the speed bar, if engaged, to return the glider to its best possible setting for recovery"
        ],
        correct: [0, 4],
        explanation: "Maintain heading control and release speed bar to optimize recovery conditions."
    },
    {
        id: 25,
        question: "Which of the following protocols should be used if your wingtip becomes tangled in the lines?",
        type: "multiple",
        options: [
            "Look at the stuck tip and start pumping it",
            "Stall it immediately",
            "Maintain heading control, then try to clear the stuck tip with brake and/or the stabilo line",
            "If the glider is spiraling as a result and/or if you have riser twist, you may need to throw your reserve"
        ],
        correct: [2, 3],
        explanation: "Maintain control first, then attempt to clear the tip. Reserve deployment may be necessary if spiraling occurs."
    },
    {
        id: 26,
        question: "You execute a complete flight and there is no vertical movement in the air and fly at trim speed. If you do the same flight but fly with full speed bar (although extended use of full speed is not advised for Novice pilots), you will:",
        type: "single",
        options: [
            "Travel further and be in the air for a longer amount of time",
            "Travel further and be in the air a shorter amount of time",
            "Travel a shorter distance but be in the air longer",
            "Travel a shorter distance and be in the air a shorter amount of time",
            "No way to determine"
        ],
        correct: [3],
        explanation: "Trim speed gives the best glide ratio. Using speed bar reduces glide distance and time aloft due to higher sink rate."
    },
    {
        id: 27,
        question: "You launch in no wind, with no vertical movement of the air and fly at trim speed. Now you do the same flight but fly close to minimum sink, you will:",
        type: "single",
        options: [
            "Travel further and be in the air a longer amount of time",
            "Travel further and be in the air a shorter amount of time",
            "Travel a shorter distance but be in the air longer",
            "Travel a shorter distance and be in the air a shorter amount of time",
            "No way to determine"
        ],
        correct: [2],
        explanation: "Flying at minimum sink speed optimizes for staying aloft longer rather than covering distance efficiently."
    },
    {
        id: 28,
        question: "What is the difference between a spin and a spiral?",
        type: "multiple",
        options: [
            "A spin is always clockwise and a spiral is counterclockwise",
            "In a spin, one wing is stalled rotating in a negative (backward) direction",
            "In a spiral, both sides of the glider are flying in a positive (forward) direction",
            "Altitude loss is usually higher in a spin"
        ],
        correct: [1, 2],
        explanation: "In a spin, one wing is stalled rotating backward; in a spiral, both wings are flying forward. Altitude loss is not necessarily higher in a spin."
    },
    {
        id: 29,
        question: "Which of the following will help your turns be better coordinated?",
        type: "single",
        options: [
            "Use just brakes to turn",
            "Use just weight shift to make smoother turns",
            "A combination of both weight shift and quick brake applications will increase responses",
            "A combination of both weight shift and progressive brake applications will result in better coordinated turns and smoother flying"
        ],
        correct: [3],
        explanation: "Coordinated turns require both weight shift and progressive brake input for optimal control."
    },
    {
        id: 30,
        question: "A high performance paraglider is not appropriate for Novice pilots because:",
        type: "multiple",
        options: [
            "Asymmetric deflations are more common and tend to be more violent",
            "These gliders are more sensitive to control inputs and can spin easier",
            "These gliders often come up very fast and are harder to launch",
            "These gliders tend to surge further and faster"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All these factors make high-performance gliders inappropriate for novice pilots."
    },
    {
        id: 31,
        question: "What equation is used to determine the force of wind?",
        type: "single",
        options: [
            "The force of wind is calculated by the square of the wind speed. So a wind of 5 MPH would have a force of 5 squared (5 x 5) or 25. A 10 MPH wind will have a force of 100",
            "Wind force is linear, a wind of 20 MPH would have double the force of a 10 MPH wind",
            "There is no calculation, wind force can only be experienced"
        ],
        correct: [0],
        explanation: "Wind force increases exponentially with wind speed."
    },
    {
        id: 32,
        question: "As a general rule, unless you are near an obstacle or the terrain, the most appropriate speed to fly in lift and sink in order to maximize the distance traveled and glide ratio is:",
        type: "single",
        options: [
            "Slowly in lift and quickly in sink",
            "Quickly in lift and slow in sink",
            "At trim speed in both lift and sink",
            "At minimum sink in both lift and sink"
        ],
        correct: [0],
        explanation: "This technique maximizes distance traveled by staying in lift longer and minimizing time in sink."
    },
    {
        id: 33,
        question: "Mechanical turbulence is most often found:",
        type: "multiple",
        options: [
            "Upwind of an object such as a tree, hill, or another aircraft",
            "Downwind of an object such as a tree, hill or another aircraft",
            "Anywhere the flow of air is being disturbed"
        ],
        correct: [1, 2],
        explanation: "Mechanical turbulence occurs downwind of obstacles and anywhere air flow is disturbed."
    },
    {
        id: 34,
        question: "Which of the following scenarios could mean possible hazardous flying conditions?",
        type: "multiple",
        options: [
            "Dark clouds",
            "Cumulus clouds that are taller than their bases are wide",
            "Virga"
        ],
        correct: [0, 1, 2],
        explanation: "All these conditions can indicate hazardous flying conditions."
    },
    {
        id: 35,
        question: "On a day with strong winds, where would you most likely find safe flying conditions?",
        type: "single",
        options: [
            "A big mountain where you can be over 2000 feet above ground level",
            "A small, smooth hill with few obstructions and no sharp contours",
            "An area with lots of trees, because the trees will block the wind",
            "A cliff site because you will get a lot of lift off the vertical face"
        ],
        correct: [1],
        explanation: "Smooth terrain with minimal obstructions provides the safest flying conditions in strong winds."
    },
    {
        id: 36,
        question: "Winds at launch are switching 180 degrees in direction and varying in velocity by 15 mph, with no obvious pattern to the cycles. This could be an indication that:",
        type: "multiple",
        options: [
            "There is plenty of good thermal activity and you should be able to stay up",
            "Conditions might be in the process of changing and this would indicate a bad time to take off",
            "You could be standing in rotor"
        ],
        correct: [1, 2],
        explanation: "Erratic wind patterns indicate changing conditions or rotor, both bad for launching."
    },
    {
        id: 37,
        question: "There is a thick, defined layer of haze below you in the valley you plan to fly into. How might this affect the conditions?",
        type: "multiple",
        options: [
            "Thermals could be weak or difficult to stay in",
            "Wind speed and direction could be different below the haze layer than above",
            "There could be turbulence at the boundary between the upper and lower layer"
        ],
        correct: [0, 1, 2],
        explanation: "Haze layers can affect thermal activity, wind patterns, and create turbulence at boundaries."
    },
    {
        id: 38,
        question: "When is the best time/way to get seated in your harness?",
        type: "single",
        options: [
            "Immediately after launching",
            "Prior to launching",
            "After launching and establishing a sensible heading, in smooth air using a technique whereby you can maintain a positive connection with the glider throughout the process",
            "It is best to stay in the vertical position throughout the flight"
        ],
        correct: [2],
        explanation: "Getting seated should be done after launch when conditions are stable and controlled."
    },
    {
        id: 39,
        question: "You are on final landing approach 30 feet in the air and notice the wind has switched and you are now in a 4 mph tailwind. What should you do?",
        type: "multiple",
        options: [
            "Make a quick 180 degree turn in order to face into the wind",
            "Fly at trim and be ready for an aggressive flare to land",
            "Pump your brakes up and down to come in slower",
            "Get upright in your harness and after flaring hard to minimize ground speed, run fast or skid to a stop if terrain allows while trying to avoid landing on the harness"
        ],
        correct: [1, 3],
        explanation: "Tailwind landings require aggressive flare and ground speed management. Both flying at trim and being ready for an aggressive flare, and getting upright and running/skidding to a stop, are appropriate responses."
    },
    {
        id: 40,
        question: "You have evaluated a new area and deem it a suitable flying site. What conditions or variables will you look for when making your first flight?",
        type: "multiple",
        options: [
            "Smooth conditions (typically early morning or late afternoon)",
            "Light or no thermal activity",
            "Flying your most stable glider",
            "Follow a safe and simple flight plan"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All these factors contribute to safe first flights at new sites."
    },
    {
        id: 41,
        question: "You are standing on launch with a wind speed indicator, measuring wind velocity and gusts. What is the maximum base wind and gust factor that you as a Novice rated pilot should launch in?",
        type: "single",
        options: [
            "Maximum base wind of 12-mph, gusts no higher than 15-mph, with a gust rate of no more than 5-mph in 5 seconds",
            "Maximum base wind of 12-mph, gusts no higher than 20-mph, with a gust rate of no more than 10 mph in 5 seconds",
            "Maximum base wind of 15-mph with no gusts"
        ],
        correct: [0],
        explanation: "Novice pilots should launch in conservative wind conditions."
    },
    {
        id: 42,
        question: "You are on launch in strong conditions and have failed three launch attempts. What should you do?",
        type: "multiple",
        options: [
            "Find someone to anchor you to help you launch more easily",
            "Keep trying, everyone has bad launches",
            "Look for some better equipment that will help you launch more easily",
            "Wait for lighter conditions. If launch conditions are too strong for your skill level you should not be flying",
            "Step aside and reassess the conditions and your readiness to launch. Review your preflight, flight plan, physical state and mental state"
        ],
        correct: [3, 4],
        explanation: "Multiple failed launches indicate conditions too strong for skill level or need to reassess readiness."
    },
    {
        id: 43,
        question: "Which of the following is a scenario where you would most likely throw your reserve?",
        type: "multiple",
        options: [
            "You are at 3000 above ground level and experience a 50% asymmetric deflation of your glider",
            "You are caught in strong rotor behind a mountain and are rapidly descending",
            "You have a frontal collapse at 2000 foot above ground level",
            "You are in a spiral and start to feel lightheaded and think you may blackout"
        ],
        correct: [1, 3],
        explanation: "Reserve deployment is most likely in rotor conditions or when pilot consciousness is threatened."
    },
    {
        id: 44,
        question: "You are setting up an approach over a LZ with no wind indicators. How can you determine the wind direction for your landing?",
        type: "multiple",
        options: [
            "Come in high over your LZ and do a one or more 360 turn/s (more than one if there is adequate altitude) to determine your drift",
            "Spit and watch which way it drifts on the way down",
            "Make an educated guess based on the wind direction at launch",
            "If there is a body of water near the LZ, looking at the water, the wind shadow will be at the upwind end. This will help you assess the wind direction"
        ],
        correct: [0, 2, 3],
        explanation: "360-degree turns, making an educated guess based on launch wind, and observing water surfaces are practical methods to determine wind direction when no indicators are available. Spitting is less reliable."
    },
    {
        id: 45,
        question: "You are forced to land in an area with many trees and no adequate fields. Which is the safest way to do so?",
        type: "single",
        options: [
            "Pull big ears and try to find the biggest space between trees so you will not get caught up in them",
            "Search early for a dense soft tree or bush, try to approach it so that your wing keeps you can avoid falling to the ground. In other words, try to navigate and manage your glider after touchdown such that the glider catches in the tree while keeping your legs together and protecting your face",
            "Try to do an approach with normal steering to any small gap between the trees"
        ],
        correct: [1],
        explanation: "Tree landings should be planned to use the tree as a safety buffer."
    },
    {
        id: 46,
        question: "What should you do if you must land your glider in a body of water?",
        type: "multiple",
        options: [
            "Try to relax, and hold your breath as you enter the water",
            "Strongly consider including a life jacket as part of your essential safety equipment",
            "Do not kick your legs unnecessarily since they can become tangled in your lines",
            "Disconnect most of your buckles, consider leaving one leg strap connected so that if you rock upright as your approach the water, you will not fall out prematurely. Once in the water release the buckle ASAP and move away from the glider and lines"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All these procedures are important for safe water landings."
    },
    {
        id: 47,
        question: "You are ridge soaring and notice that you are barely penetrating forward but are still going up. What should you do?",
        type: "multiple",
        options: [
            "Pull a B-Line stall to get down lower",
            "Do big ears to get down below the lift band and increase your forward speed",
            "Fly with speed bar as appropriate to position yourself further away from the ridge and lift band",
            "Consider heading to a landing area if the winds are increasing"
        ],
        correct: [2, 3],
        explanation: "When ridge soaring with poor penetration, use speed bar to position away from the ridge and consider landing if conditions worsen."
    },
    {
        id: 48,
        question: "What is the possible danger involved in performing big ears?",
        type: "multiple",
        options: [
            "Accidentally pulling down the entire riser(s) or the wrong set of risers",
            "Reduction in directional control",
            "Potential for deflation due to the pilot's inability to control via the brakes"
        ],
        correct: [0, 1, 2],
        explanation: "All these factors can make big ears dangerous if not performed correctly."
    },
    {
        id: 49,
        question: "The most appropriate initial response to a glider that enters a spin is?",
        type: "single",
        options: [
            "Actively brake and weight shift to regain directional control over the glider",
            "Release brake pressure to un-stall the wing, while maintaining good flying posture, look for the glider to restart and manage any subsequent deflations or heading issues",
            "Hold the spin until it is in a stable",
            "Pump out the stalled wing"
        ],
        correct: [1],
        explanation: "The correct response to a spin is to release brake pressure to allow the wing to recover."
    },
    {
        id: 50,
        question: "Paragliding can be summed up as:",
        type: "multiple",
        options: [
            "A completely safe sport",
            "The risk can be managed and reduced if done in proper flying conditions and with proper training and equipment",
            "Can be a safe sport if you always fly with other pilots and have proper training and equipment as well as keeping a good attitude and respect for safety"
        ],
        correct: [1, 2],
        explanation: "Paragliding risks can be managed with proper conditions, training, equipment, and safety attitude."
    },
    {
        id: 51,
        question: "Which of the following is true about where we can legally fly our paragliders according to the FAA?",
        type: "single",
        options: [
            "You may fly your glider anywhere outside Airport and Military areas",
            "You may not fly a paraglider over congested areas at any altitude",
            "You may fly over congested areas as long as you are over 500 feet above ground level",
            "We are self regulated and are not subject to FAA Airspace rules"
        ],
        correct: [1],
        explanation: "FAR Part 103 prohibits flying over congested areas regardless of altitude."
    },
    {
        id: 52,
        question: "Which of the following are most accurate about glider certification ratings? note: A=Beginner; B=Intermediate; C=Advanced; D=Competition Level (A=low rating; D=high rating)",
        type: "multiple",
        options: [
            "Higher rated gliders take longer to recover from events such as collapses, spins and stalls; in some cases, they will not recover without correct pilot input",
            "Gliders undergo testing to see how prone they are to deflation",
            "It is not certain that all pilots will need to move toward flying a higher level glider",
            "Pilots should always consult with their instructor to see which level glider is appropriate for them at their stage"
        ],
        correct: [0, 1, 2, 3],
        explanation: "All these statements are accurate about glider certification ratings."
    },
    {
        id: 53,
        question: "A hang glider or paraglider is classified by the FAA as an ultralight, and the pilot and glider must specifically adhere to Federal Aviation Regulations (FAR) Part 103.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "Hang gliders and paragliders are classified as ultralights under FAR Part 103."
    },
    {
        id: 54,
        question: "The airspace within 700 or 1200 feet of the surface (outside of airport or otherwise restricted airspace) is uncontrolled and designated as E or G and therefore appropriate for ultralight activity without specific permission.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "Class E and G airspace below 700-1200 feet is uncontrolled and appropriate for ultralight activity."
    },
    {
        id: 55,
        question: "Which of the following airspace areas would you NOT need prior authorization from an FAA controlling agency to fly in?",
        type: "single",
        options: [
            "Class A & B",
            "Class C & D",
            "Class E & G"
        ],
        correct: [2],
        explanation: "Class E and G airspace typically does not require prior authorization for ultralight operations."
    },
    {
        id: 56,
        question: "Class D controlled airspace, surrounding a Class D towered airport, is depicted on an aeronautical chart as:",
        type: "single",
        options: [
            "A blue dashed circle, with a normal upper limit of 2500 feet AGL, usually 10 nautical miles in diameter",
            "A magenta dashed circle, with a vertical limit at overlying controlled airspace, usually 10 nautical miles in diameter",
            "Two thick magenta solid concentric circles, with a vertical limit given in hundreds of feet MSL, usually 20 nautical miles in diameter",
            "Several thick blue solid concentric circles, with a vertical limit given in hundreds of feet MSL, associated with a thin solid magenta circle (Mode C transponder veil) usually 60 nautical miles in diameter"
        ],
        correct: [0],
        explanation: "Class D airspace is depicted as a blue dashed circle on aeronautical charts."
    },
    {
        id: 57,
        question: "According to FAR Part 103, what are the minimum visibility and cloud clearance requirements when flying in Class E controlled airspace below 10,000 feet MSL?",
        type: "single",
        options: [
            "1 statute mile visibility, remaining clear of clouds",
            "3 statute miles visibility, remaining clear of clouds",
            "3 statute miles visibility, remaining 50 feet below, 100 feet above, and 200 feet horizontally away from clouds",
            "3 statute miles visibility, remaining 500 feet below, 1000 feet above, and 2000 feet horizontally away from clouds"
        ],
        correct: [3],
        explanation: "These are the minimum requirements for Class E airspace below 10,000 feet MSL."
    },
    {
        id: 58,
        question: "A Temporary Flight Restriction (TFR), which can put in place by the federal government with short notice to prohibit flight over a geographical area due to presidential visits, national security concerns, large sporting events, natural disasters, accident investigation, etc., applies only to regular aircraft, and not to hang gliders, paragliders, or ultralights.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "TFRs apply to all aircraft including ultralights, hang gliders, and paragliders."
    },
    {
        id: 59,
        question: "In a headwind of 8 miles per hour with no lift or sink component, what airspeed will help you fly further upwind?",
        type: "single",
        options: [
            "Slower than trim",
            "Trim",
            "Some amount of speed bar",
            "Full speed bar"
        ],
        correct: [2],
        explanation: "Using speed bar helps penetrate upwind more effectively."
    },
    {
        id: 60,
        question: "Which of the following techniques is best to initiate a turn into a thermal?",
        type: "single",
        options: [
            "Use weight shift to turn",
            "Weight shift and add brake input in the direction you want to turn while keeping some pressure in the opposite brake",
            "Pull down on the brake in the direction you want to turn",
            "Pull down on the brake in the direction you want to turn and let the other hand up at the same time"
        ],
        correct: [1],
        explanation: "Coordinated turns into thermals require both weight shift and brake input."
    },
    {
        id: 61,
        question: "What happens to the sink rate of a paraglider if you fly slower than minimum sink?",
        type: "multiple",
        options: [
            "The speed will slow and the sink rate will decrease",
            "The speed will slow and the sink rate will increase",
            "The glider will be closer to stall"
        ],
        correct: [1, 2],
        explanation: "Flying slower than minimum sink increases sink rate and brings the glider closer to stall."
    },
    {
        id: 62,
        question: "Big ears reduce the size of the wing and increases the drag. A paraglider will:",
        type: "multiple",
        options: [
            "Have a slower airspeed with a faster descent rate",
            "Have a higher airspeed because of the reduced wing size",
            "Only be steerable with weight shift because the hands will need to hold the big ears to keep them engaged"
        ],
        correct: [0, 2],
        explanation: "Big ears increase descent rate and reduce steering to weight shift only."
    },
    {
        id: 63,
        question: "The process of clearing a turn is done by:",
        type: "single",
        options: [
            "Looking in the direction of any turn as you begin the turn",
            "Looking above and below you prior to turn initiation",
            "Looking all around you to ensure a safe turn is possible prior to the turn being initiated"
        ],
        correct: [2],
        explanation: "Clearing a turn requires a complete scan of the surrounding airspace."
    },
    {
        id: 64,
        question: "When does it make sense to carry a reserve parachute?",
        type: "single",
        options: [
            "On all flights",
            "Only when an altitude of 500' above the ground is reached",
            "On most flights other than flights from a low slope or training hill that are not high enough for a successful deployment",
            "Only on flights where turbulence might be encountered"
        ],
        correct: [2],
        explanation: "Reserves should be carried on most flights except very low training flights."
    },
    {
        id: 65,
        question: "Which of the following is true about the width setting for a harness' waist belt?",
        type: "multiple",
        options: [
            "The wider the setting, the more seat steering will be possible",
            "With a narrower setting, during a rotation like a spin, there is an increased chance for a riser twist",
            "It is important to stay within the adjustment range specified for certification and/or recommended by the manufacturer of the harness, paraglider or both"
        ],
        correct: [0, 1, 2],
        explanation: "All these statements are true about harness waist belt width."
    },
    {
        id: 66,
        question: "If a wing enters a parachutal or deep stall which of the following would help to return the wing to normal flight?",
        type: "multiple",
        options: [
            "Push on the speed bar",
            "Pull the brakes slightly",
            "Lower your angle of attack. Without the speed bar, you can do this by bending (tweaking) both A risers forward if the speed bar is not quickly accessible (talk to your instructor if not familiar with this technique)"
        ],
        correct: [0, 2],
        explanation: "Speed bar or lowering angle of attack can help recover from parachutal/deep stall."
    },
    {
        id: 67,
        question: "Using figure eight turns instead of full circling turns is recommended when close to the terrain because:",
        type: "multiple",
        options: [
            "The figure eight is safer because we avoid flying directly at the terrain",
            "Figure eight turns allow us to get terrain clearance before committing to a full circling 360 turn",
            "We are able to fly away from the terrain easier if we hit a patch of sinking air"
        ],
        correct: [0, 1, 2],
        explanation: "Figure eight turns provide more options for terrain clearance and safety."
    }
];

// Combine all questions
const allQuestions = [...quizData, ...additionalQuestions];

// Quiz state
let currentQuestion = null;
let selectedAnswers = [];
let questionHistory = [];
let isSequentialMode = false;
let currentSequentialIndex = 0;
let stats = {
    totalAnswered: 0,
    correctAnswers: 0,
    questionStats: {}
};

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('paraglidingQuizStats');
    if (saved) {
        stats = JSON.parse(saved);
    }
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('paraglidingQuizStats', JSON.stringify(stats));
}

// Initialize question statistics
function initializeQuestionStats() {
    allQuestions.forEach(q => {
        if (!stats.questionStats[q.id]) {
            stats.questionStats[q.id] = {
                attempts: 0,
                correct: 0,
                lastSeen: 0
            };
        }
    });
}

// Get next question using adaptive algorithm or sequential mode
function getNextQuestion() {
    if (isSequentialMode) {
        // Sequential mode: go through questions in order
        if (currentSequentialIndex >= allQuestions.length) {
            currentSequentialIndex = 0; // Loop back to start
        }
        return allQuestions[currentSequentialIndex];
    }
    
    // Adaptive mode: original algorithm
    const now = Date.now();
    const questions = allQuestions.map(q => {
        const qStats = stats.questionStats[q.id];
        const daysSinceLastSeen = (now - qStats.lastSeen) / (1000 * 60 * 60 * 24);
        const accuracy = qStats.attempts > 0 ? qStats.correct / qStats.attempts : 0.5;
        
        // Weight based on accuracy and time since last seen
        let weight = 1;
        if (accuracy < 0.7) weight *= 3; // Ask failed questions more often
        if (daysSinceLastSeen > 7) weight *= 2; // Ask old questions more often
        if (qStats.attempts < 3) weight *= 2; // Ask new questions more often
        
        return { question: q, weight };
    });
    
    // Select question based on weights
    const totalWeight = questions.reduce((sum, q) => sum + q.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const q of questions) {
        random -= q.weight;
        if (random <= 0) {
            return q.question;
        }
    }
    
    return questions[0].question;
}

// Update display
function updateDisplay() {
    document.getElementById('questionsAnswered').textContent = stats.totalAnswered;
    document.getElementById('correctAnswers').textContent = stats.correctAnswers;
    document.getElementById('accuracy').textContent = 
        stats.totalAnswered > 0 ? Math.round((stats.correctAnswers / stats.totalAnswered) * 100) + '%' : '0%';
}

// Display question
function displayQuestion(question) {
    currentQuestion = question;
    document.getElementById('questionNumber').textContent = `Question ${question.id}`;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionType').textContent = 
        question.type === 'single' ? 'Single Choice' : 'Multiple Choice';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const input = document.createElement('input');
        input.type = question.type === 'single' ? 'radio' : 'checkbox';
        input.name = 'answer';
        input.value = index;
        input.id = `option-${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;
        
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        
        // Add click handler
        optionDiv.addEventListener('click', () => {
            if (question.type === 'single') {
                document.querySelectorAll('input[name="answer"]').forEach(inp => inp.checked = false);
                input.checked = true;
            } else {
                input.checked = !input.checked;
            }
            updateSelectedAnswers();
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    selectedAnswers = [];
    updateSelectedAnswers();
}

// Update selected answers
function updateSelectedAnswers() {
    selectedAnswers = [];
    document.querySelectorAll('input[name="answer"]:checked').forEach(input => {
        selectedAnswers.push(parseInt(input.value));
    });
    
    document.getElementById('submitBtn').disabled = selectedAnswers.length === 0;
}

// Check answer
function checkAnswer(question, selectedAnswers) {
    const correct = question.correct;
    const isCorrect = selectedAnswers.length === correct.length &&
        selectedAnswers.every(answer => correct.includes(answer));
    
    return isCorrect;
}

// Show feedback
function showFeedback(question, isCorrect, selectedAnswers) {
    const feedback = document.getElementById('feedback');
    const correct = question.correct;
    
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.style.display = 'block';
    
    let feedbackHTML = `<h3>${isCorrect ? 'Correct!' : 'Incorrect'}</h3>`;
    
    if (!isCorrect) {
        feedbackHTML += '<p><strong>Correct answer(s):</strong></p>';
        correct.forEach(index => {
            feedbackHTML += `<p>• ${question.options[index]}</p>`;
        });
    }
    
    if (question.explanation) {
        feedbackHTML += `<p><strong>Explanation:</strong> ${question.explanation}</p>`;
    }
    
    feedback.innerHTML = feedbackHTML;
    
    // Show/hide buttons
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
}

// Submit answer
function submitAnswer() {
    const isCorrect = checkAnswer(currentQuestion, selectedAnswers);
    
    // Update stats
    stats.totalAnswered++;
    if (isCorrect) stats.correctAnswers++;
    
    const qStats = stats.questionStats[currentQuestion.id];
    qStats.attempts++;
    if (isCorrect) qStats.correct++;
    qStats.lastSeen = Date.now();
    
    saveStats();
    updateDisplay();
    showFeedback(currentQuestion, isCorrect, selectedAnswers);
}

// Next question
function nextQuestion() {
    if (isSequentialMode) {
        currentSequentialIndex++;
    }
    const question = getNextQuestion();
    displayQuestion(question);
    
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
}

// Reset all scores and statistics
function resetScore() {
    if (confirm('Are you sure you want to reset all scores and statistics? This cannot be undone.')) {
        // Reset stats
        stats = {
            totalAnswered: 0,
            correctAnswers: 0,
            questionStats: {}
        };
        
        // Reset sequential mode index
        currentSequentialIndex = 0;
        
        // Initialize question stats
        initializeQuestionStats();
        
        // Save reset stats
        saveStats();
        
        // Update display
        updateDisplay();
        
        // Load first question
        const question = getNextQuestion();
        displayQuestion(question);
        
        // Clear any feedback
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'none';
    }
}

// Toggle between adaptive and sequential modes
function toggleMode() {
    isSequentialMode = !isSequentialMode;
    currentSequentialIndex = 0;
    
    const modeToggle = document.getElementById('modeToggle');
    if (isSequentialMode) {
        modeToggle.textContent = 'Switch to Adaptive Mode';
        modeToggle.className = 'btn btn-primary';
    } else {
        modeToggle.textContent = 'Switch to Sequential Mode';
        modeToggle.className = 'btn btn-secondary';
    }
    
    // Load first question in new mode
    const question = getNextQuestion();
    displayQuestion(question);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    initializeQuestionStats();
    updateDisplay();
    
    const question = getNextQuestion();
    displayQuestion(question);
    
    document.getElementById('submitBtn').addEventListener('click', submitAnswer);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('modeToggle').addEventListener('click', toggleMode);
    document.getElementById('resetBtn').addEventListener('click', resetScore);
}); 