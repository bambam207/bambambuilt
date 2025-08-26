/* wods.js — ALL known WODs (100+), adapted to your gear
   Gear covered: jump rope (DU/SU), 2×50 lb DBs, KB 53 & 35, rower, running,
   box jumps (20/24/32), pull-up bar (PU/C2B/BMU), bodyweight, wall ball.
   Exports:
     window.WOD_BANK      = [ {title,type,time,body:[...],notes?}, ... ]
     window.WOD_TRIBUTES  = { "Murph":"...", "Glen (Home)":"...", ... }
     window.WOD_DATE_MAP  = { "MM-DD":"Title or Index", ... }  (optional)
*/

/* Optional explicit date overrides (your app already pins the big ones).
   Keys MUST be "MM-DD" (two digits each). Leave this object in place; edit if you want more pins.
*/
window.WOD_DATE_MAP = {
  "09-11": "Glen (Home)",
  "11-11": 'Chad 1000X (24")',
  "07-04": "Kalsu (DB Thruster)",
  "12-25": "12 Days of Christmas (Home)"
};

(function(){
  const DB1 = "1×50 lb", DB2 = "2×50 lb", KB53 = "53 lb", KB35 = "35 lb", BOX='24"';
  const W=(title,type,time,body,notes="")=>({title,type,time,body,notes});

  /* ============================== GIRLS ============================== */
  const GIRLS=[
    W("Angie","For Time","20–40",["For time:","• 100 Pull-ups","• 100 Push-ups","• 100 Sit-ups","• 100 Air Squats"],"Partition as needed."),
    W("Annie","For Time","10–20",["For time:","• 50-40-30-20-10 Double-unders","• 50-40-30-20-10 Sit-ups"],"If <20, add 800m jog."),
    W("Barbara","For Time (5 rds)","40–50",["5 rounds:","• 20 Pull-ups","• 30 Push-ups","• 40 Sit-ups","• 50 Air Squats","Rest 3 min"],"Even splits."),
    W("Barbara (Half)","For Time (5 rds)","30–40",["5 rounds:","• 10 Pull-ups","• 20 Push-ups","• 30 Sit-ups","• 40 Air Squats","Rest 2 min"],"Scaled volume."),
    W("Betty (DB)","For Time (5 rds)","20–35",["5 rounds:","• 12 DB Push Press — "+DB2,"• 20 Box Jumps — "+BOX],"DB version."),
    W("Chelsea","EMOM 30","30",["Every min for 30:","• 5 Pull-ups, 10 Push-ups, 15 Air Squats"],"Finish work ≤45s."),
    W("Cindy","AMRAP 20","20",["AMRAP 20:","• 5 Pull-ups","• 10 Push-ups","• 15 Air Squats"],"No redline."),
    W("Christine (DB)","For Time (3 rds)","12–25",["3 rounds:","• Row 500m","• 12 DB Deadlifts — "+DB2,"• 21 Box Jumps — "+BOX],"DB swap for 135/95."),
    W("Diane (DB)","For Time","10–20",["21-15-9:","• DB Deadlifts — "+DB2,"• Handstand Push-ups"],"DB for barbell."),
    W("Elizabeth (DB)","For Time","10–20",["21-15-9:","• DB Squat Cleans — "+DB2,"• Strict Dips or Deficit Push-ups"],"No rings? Use push-ups."),
    W("Eva (Scaled)","For Time (5 rds)","35–55",["5 rounds:","• 800m Run","• 30 KB Swings — "+KB53,"• 30 Pull-ups"],"Grip management."),
    W("Fran (DB)","For Time","10–20",["21-15-9:","• DB Thrusters — "+DB2,"• Pull-ups"],"DBs for barbell."),
    W("Gwen (DB C&J)","Unbroken Sets","10–25",["3 sets (unbroken):","• 15 DB Clean & Jerks — "+DB2,"• 12 DB Clean & Jerks — "+DB2,"• 9 DB Clean & Jerks — "+DB2],"Rest as needed."),
    W("Grace (DB C&J)","For Time","8–20",["For time:","• 30 DB Clean & Jerks — "+DB2],"DBs instead of 135#."),
    W("Helen","For Time (3 rds)","12–20",["3 rounds:","• 400m Run","• 21 KB Swings — "+KB53,"• 12 Pull-ups"],"Add 800m jog if <20."),
    W("Isabel (DB Snatch)","For Time","8–15",["For time:","• 30 Alt DB Snatches — "+DB1],"DB snatch variant."),
    W("Jackie (DB Thruster)","For Time","12–20",["For time:","• Row 1000m","• 50 Thrusters — "+DB1,"• 30 Pull-ups"],"Goblet/DB thrusters."),
    W("Karen","For Time","12–20",["For time:","• 150 Wall Balls"],"Break early; steady cadence."),
    W("Kelly","For Time (5 rds)","25–40",["5 rounds:","• 400m Run","• 30 Box Jumps — "+BOX,"• 30 Wall Balls"],"Triplet pace."),
    W("Linda (DB ‘3 Bars’)","For Time","25–45",["10-9-8-…-1:","• DB Deadlifts — "+DB2,"• DB Bench Push-ups (feet elevated)","• DB Cleans — "+DB2],"DB/bodyweight take."),
    W("Lynne (BW sub)","Max Effort (5 rds)","20–35",["5 rounds (not for time):","• Max Strict Push-ups","• Max Pull-ups"],"Strength endurance."),
    W("Mary","AMRAP 20","20",["AMRAP 20:","• 5 Handstand Push-ups","• 10 Pistols (alt)","• 15 Pull-ups"],"Gymnastics control."),
    W("Megan","For Time","12–25",["21-15-9:","• Burpees","• KB Swings — "+KB53,"• Double-unders"],"If <20, add 800m jog."),
    W("Nancy (DB/KB OHS)","For Time (5 rds)","20–35",["5 rounds:","• 400m Run","• 15 Overhead Squats — Single DB/KB"],"Single-arm OH."),
    W("Nicole","AMRAP 20","20",["AMRAP 20:","• 400m Run","• Max Pull-ups"],"Score = total pull-ups."),
    W("Nasty Girls (DB HPC)","For Time (3 rds)","12–25",["3 rounds:","• 50 Air Squats","• 7 Bar Muscle-ups","• 10 DB Hang Power Cleans — "+DB2],"DB for 135#."),
    W("Amanda (DB + BMU)","For Time","8–20",["9-7-5:","• Bar Muscle-ups","• Alt DB Snatches — "+DB1],"DB snatch + BMU.")
  ];

  /* ============================== HEROES ============================== */
  const HEROES=[
    W("Murph","For Time","40–60",["For time:","• 1 mile Run","• 100 Pull-ups","• 200 Push-ups","• 300 Air Squats","• 1 mile Run"],"Partition as needed."),
    W("Glen (Home)","For Time","45–60",["For time:","• 1 mile Run","• 100 Pull-ups","• 200 Push-ups","• 300 Sit-ups","• 1 mile Run"],"Partition calisthenics."),
    W("Michael (Home)","For Time (3 rds)","20–35",["3 rounds:","• 800m Run","• 50 Sit-ups","• 50 Supermans"],"Back ext sub."),
    W("JT (BW)","For Time","10–25",["21-15-9:","• Handstand Push-ups","• Push-ups","• Dips or Deficit Push-ups"],"No rings → push-up variant."),
    W("Daniel (DB)","For Time","20–35",["For time:","• 50 DB Thrusters — "+DB2,"• 400m Run","• 21 Pull-ups","• 800m Run","• 21 Pull-ups","• 400m Run","• 50 DB Thrusters — "+DB2],"DB swap."),
    W("Josh (DB OHS)","For Time","20–35",["For time:","• 21 Overhead Squats — "+DB1,"• 42 Pull-ups","• 15 Overhead Squats — "+DB1,"• 30 Pull-ups","• 9 Overhead Squats — "+DB1,"• 18 Pull-ups"],"Single-DB OH."),
    W("Jason (Bar MU)","For Time","20–40",["For time:","• 100 Squats","• 5 Bar Muscle-ups","• 75 Squats","• 10 Bar Muscle-ups","• 50 Squats","• 15 Bar Muscle-ups","• 25 Squats","• 20 Bar Muscle-ups"],"Bar MU."),
    W("Badger (DB Squat Clean)","For Time (3 rds)","30–50",["3 rounds:","• 30 DB Squat Cleans — "+DB2,"• 30 Pull-ups","• 800m Run"],"DB for 95#."),
    W("Joshie (KB alt)","For Time (3 rds)","25–45",["3 rounds:","• 21 KB Snatches (L) — "+KB53,"• 21 KB Snatches (R) — "+KB53,"• 42 Pull-ups"],"KB snatch + PU."),
    W("Nate (Bar MU)","AMRAP 20","20",["AMRAP 20:","• 2 Bar Muscle-ups","• 4 Handstand Push-ups","• 8 KB Swings — "+KB53],"Bar MU sub."),
    W("Randy (DB)","For Time","5–12",["For time:","• 75 Alt DB Snatches — "+DB1],"DB snatch variant."),
    W("Griff","For Time","10–20",["For time:","• 800m Run","• 400m Run (backward)","• 800m Run","• 400m Run (backward)"],"Watch footing."),
    W("Ryan (BMU+Burpee)","5 RFT","20–35",["5 rounds:","• 7 Bar Muscle-ups","• 21 Burpees"],"Bar MU."),
    W("Erin (DB)","For Time (5 rds)","30–45",["5 rounds:","• 15 DB Split Cleans — "+DB1,"• 21 Pull-ups"],"DB split clean."),
    W("Danny (DB PP)","AMRAP 20","20",["AMRAP 20:","• 30 Box Jumps — "+BOX,"• 20 DB Push Press — "+DB2,"• 30 Pull-ups"],"DB for 115#."),
    W("Hansen (Sub GHD)","For Time (5 rds)","25–45",["5 rounds:","• 30 KB Swings — "+KB53","• 30 Burpees","• 30 Sit-ups"],"Sit-ups for GHD."),
    W("Loredo","For Time (6 rds)","25–45",["6 rounds:","• 24 Air Squats","• 24 Push-ups","• 24 Walking Lunges","• 400m Run"],"Bodyweight + run."),
    W("Gallant (WB/Run)","For Time","25–45",["For time:","• 1 km Run","• 60 Burpees","• 800m Run","• 30 Wall Balls","• 400m Run"],"WB + running."),
    W("Weston (DB Carry)","For Time (5 rds)","30–50",["5 rounds:","• 100m DB Farmers Carry — "+DB2,"• 100m DB Front Rack Carry — "+DB2,"• 100m DB Overhead Carry — "+DB1],"Measure distance."),
    W("Hamilton","For Time (3 rds)","35–55",["3 rounds:","• Row 1000m","• 50 Push-ups","• Run 1000m","• 50 Pull-ups"],"Engine + gym."),
    W("Schmalls","For Time","30–50",["For time:","• 800m Run","• 50 Burpees","• 50 Pull-ups","• 50 KB Swings — "+KB53,"• 50 Sit-ups","• 800m Run"],"Volume tripper."),
    W("Bradley","For Time (10 rds)","30–50",["10 rounds:","• Sprint 100m","• 10 Pull-ups","• 100m Jog","Rest 30s"],"Run pacing."),
    W("Riley","For Time","40–60",["For time:","• Run 1.5 miles","• 150 Burpees","• Run 1.5 miles"],"Mental grind."),
    W("Severin","For Time","30–50",["For time:","• 50 Strict Pull-ups","• 100 Hand-Release Push-ups","• 5 km Run"],"Strict PU—break smart."),
    W("Helton (DB)","For Time (3 rds)","25–45",["3 rounds:","• 800m Run","• 30 DB Squat Cleans — "+DB2,"• 30 Burpees"],"DB version."),
    W("Jack (DB PP)","AMRAP 20","20",["AMRAP 20:","• 10 DB Push Press — "+DB2,"• 10 KB Swings — "+KB53,"• 10 Box Jumps — "+BOX],"DB for 115#."),
    W("Forrest","For Time (3 rds)","30–45",["3 rounds:","• 20 L-Pull-ups","• 30 Toes-to-Bar","• 40 Burpees","• 800m Run"],"Gymn endurance."),
    W("Omar (DB Thruster)","For Time","20–35",["For time:","• 10 DB Thrusters — "+DB2,"• 15 Burpees","• 20 DB Thrusters — "+DB2,"• 25 Burpees","• 30 DB Thrusters — "+DB2,"• 35 Burpees"],"DB for 95#."),
    W("Arnie (KB)","For Time","25–45",["For time:","• 21 Turkish Get-Ups (R) — "+KB53,"• 50 KB Swings — "+KB53,"• 21 Overhead Squats (L) — "+KB53],"Single-bell."),
    W("Jerry","For Time","20–40",["For time:","• Run 1 mile","• Row 2 km","• Run 1 mile"],"Steady engine."),
    W("Ship (DB/Row)","For Time (9 rds)","35–55",["9 rounds:","• 7 DB Hang Power Cleans — "+DB2,"• 8 Burpees","• 9 Push-ups","• Row 200m"],"DB/row variant."),
    W("DT (DB)","For Time (5 rds)","15–25",["5 rounds:","• 12 DB Deadlifts — "+DB2,"• 9 DB Hang Power Cleans — "+DB2,"• 6 DB Push Jerks — "+DB2],"DB variant."),
    W("Manion (DB Front Squat)","For Time (7 rds)","30–50",["7 rounds:","• 400m Run","• 29 DB Front Squats — "+DB2],"DB FS for 135# back squats."),
    W("Sisson (PU sub)","AMRAP 20","20",["AMRAP 20:","• 10 Pull-ups (rope climb sub)","• 5 Burpees","• Run 200m"],"Rope-climb sub."),
    W("Blake (DB OH Lunge)","For Time (4 rds)","30–50",["4 rounds:","• 100-ft DB Overhead Walking Lunge — "+DB1,"• 30 Box Jumps — "+BOX,"• 20 Wall Balls","• 10 Handstand Push-ups"],"Plate->DB OH."),
    W("White (PU sub)","For Time (5 rds)","30–50",["5 rounds:","• 15 Pull-ups (rope sub)","• 10 Toes-to-Bar","• 400m Run"],"Rope-climb sub."),
    W("Roy (DB DL)","For Time (5 rds)","25–45",["5 rounds:","• 15 DB Deadlifts — "+DB2,"• 20 Box Jumps — "+BOX,"• 25 Pull-ups"],"DB for 225#."),
    W("Holleyman (DB Clean)","For Time (30 rds)","30–50",["30 rounds:","• 5 Wall Balls","• 3 Handstand Push-ups","• 1 DB Clean — "+DB2],"DB clean for 225#."),
    W("McGhee (DB DL)","AMRAP 30","30",["AMRAP 30:","• 5 DB Deadlifts — "+DB2,"• 13 Push-ups","• 9 Box Jumps — "+BOX],"DB for 275#."),
    W("Kalsu (DB Thruster)","For Time","30–60",["For time:","• 100 DB Thrusters — "+DB2","At the top of every minute: 5 Burpees"],"DB thruster variant."),
    W('Chad 1000X (24")',"For Time","30–60",["For time:","• 1,000 Box Step-ups — "+BOX],"Add ruck if desired."),
    W("Luce","For Time (3 rds)","25–45",["3 rounds:","• 1000m Run","• 10 Bar Muscle-ups","• 100 Air Squats"],"BMU allowed on PU bar."),
    W("Jared (BW)","For Time (4 rds)","25–45",["4 rounds:","• 800m Run","• 40 Pull-ups","• 70 Push-ups"],"Bodyweight engine.")
  ];

  /* ============================== OPEN (DB/Box/PU/DU/WB/Row/Run variants) ============================== */
  const OPEN=[
    W("Open 11.1 / 14.1 (DB)","AMRAP 10","20 (cap)",["AMRAP 10:","• 30 Double-unders","• 15 Alt DB Snatches — "+DB1],"DB swap for barbell."),
    W("Open 12.1","AMRAP 7","20 (cap)",["AMRAP 7:","• Burpees"],"Add easy row to hit ≥20."),
    W("Open 13.1 (DB)","AMRAP 17","20",["Burpee ladder + Alt DB Snatches — "+DB1],"Keep moving."),
    W("Open 13.2 (DB)","AMRAP 10","20 (cap)",["AMRAP 10:","• 5 DB Shoulder-to-Overhead — "+DB2,"• 10 DB Deadlifts — "+DB2,"• 15 Box Jumps — "+BOX],"DB swap for 115/75."),
    W("Open 13.4 (DB C&J)","AMRAP 7","20 (cap)",["AMRAP ladder 3-6-9…:","• DB Clean & Jerks — "+DB2,"• Toes-to-Bar"],"DB for 135/95."),
    W("Open 13.5 (DB)","AMRAP 4 ×2","20–30",["Two 4-min AMRAPs: 15 DB Thrusters — "+DB2+" / 15 C2B; rest 1 min; repeat"],"Classic burn."),
    W("Open 14.2 (DB OHS)","Every 3:00","20–30",["Every 3 min add 2 reps, start 10:","• DB Overhead Squats — "+DB1,"• Chest-to-Bar Pull-ups"],"Single-arm OH."),
    W("Open 14.4 (DB) / 23.1","AMRAP 14","20 (cap)",["AMRAP 14:","• Row 60 Cal","• 50 Toes-to-Bar","• 40 Wall Balls","• 30 DB Cleans — "+DB2,"• 20 Bar Muscle-ups"],"DB cleans."),
    W("Open 14.5 / 16.5 (DB)","For Time","20–30",["21-18-15-12-9-6-3:","• DB Thrusters — "+DB2,"• Burpees"],"DB thruster swap."),
    W("Open 15.1 (DB)","AMRAP 9","20 (cap)",["AMRAP 9:","• Toes-to-Bar","• DB Deadlifts — "+DB2","• Alt DB Snatches — "+DB1],"Adapted loads."),
    W("Open 15.3","AMRAP 14","20 (cap)",["AMRAP 14:","• 7 Bar Muscle-ups (or PU)","• 50 Wall Balls","• 100 Double-unders"],"OG triplet."),
    W("Open 15.5 (DB)","For Time","15–25",["For time:","• Row 27-21-15-9 Cal","• DB Thrusters — "+DB2],"DB for 95#."),
    W("Open 16.1 (DB OH Lunge)","AMRAP 20","20",["25-ft OH Lunge — "+DB1+" / 8 Burpees / 25-ft OH Lunge / 8 C2B"],"Use shuttle space."),
    W("Open 16.2 (DB)","Every 4:00","20–28",["Toes-to-Bar / Double-unders / DB Squat Cleans — "+DB2+" (increasing reps)"],"DB for barbell."),
    W("Open 16.3 (DB + BMU)","AMRAP 7","20 (cap)",["AMRAP 7:","• 10 Alt DB Snatches — "+DB1,"• 3 Bar Muscle-ups"],"DB era style."),
    W("Open 16.4 / 17.4 (DB)","AMRAP 13","20 (cap)",["AMRAP 13:","• 55 DB Deadlifts — "+DB2,"• 55 Wall Balls","• 55 Cal Row","• 55 Handstand Push-ups"],"DB for 225/155."),
    W("Open 17.1 / 21.2 (DB)","For Time","20–30",["10-20-30-40-50:","• Alt DB Snatches — "+DB1,"After each set: 15 Burpee Box Jump-Overs — "+BOX],"As written."),
    W("Open 17.2 (DB)","AMRAP 12","20 (cap)",["AMRAP 12:","• 50-ft DB Front Rack Lunge — "+DB2,"• 16 Toes-to-Bar","• 8 DB Power Cleans — "+DB2],"Use shuttle."),
    W("Open 17.3 (DB + BMU)","Every 8:00","20–32",["Chest-to-Bar / DB Snatch ladder / Bar Muscle-ups"],"Adapt loads."),
    W("Open 17.5 (DB)","10 RFT","20–30",["10 rounds:","• 9 DB Thrusters — "+DB2,"• 35 Double-unders"],"DB swap."),
    W("Open 18.1","AMRAP 20","20",["AMRAP 20:","• 8 Toes-to-Bar","• 10 DB Hang Clean & Jerks — "+DB1,"• 14/12 Cal Row"],"Grip-friendly."),
    W("Open 18.2 (DB)","For Time + Heavy","10–20",["1-2-3-…-10:","• DB Squats — "+DB2,"• Burpees"],"Skip part B load."),
    W("Open 18.3 (DB)","AMRAP 14","20 (cap)",["AMRAP 14:","• 100 DUs","• 20 Alt DB Snatches — "+DB1","• 100 DUs","• 12 Bar MU"],"Adapted."),
    W("Open 18.4 (DB)","For Time","10–25",["21-15-9:","• DB Deadlifts — "+DB2,"• Handstand Push-ups","Then 21-15-9:","• DB Deadlifts — "+DB2,"• Handstand Walks (or Bear Crawl)"],"Scale walk."),
    W("Open 18.5 (DB)","AMRAP 7","10–20",["AMRAP 7:","• Thrusters — "+DB2,"• Chest-to-Bar Pull-ups"],"Classic sprint."),
    W("Open 19.1","AMRAP 15","20 (cap)",["AMRAP 15:","• 19 Wall Balls","• 19 Cal Row"],"Add row cool-down if <20."),
    W("Open 19.2 (DB)","Every 4:00","20–28",["T2B / DUs / DB Squat Cleans — "+DB2+" (ascending)"],"DB swap."),
    W("Open 19.3 (DB/Box)","For Time","12–25",["For time:","• 200-ft DB OH Lunges — "+DB1,"• 50 DB Box Step-ups — "+BOX,"• 50 Strict HSPU"],"Box step-ups."),
    W("Open 19.4 (DB + BMU)","For Time (2 parts)","16–20",["Part A 12 min:","• 3 Rds of 10 DB Snatches — "+DB1+" / 12 Bar MU","Rest 3 min","Part B 4 min: 30 Burpees"],"Adapted."),
    W("Open 19.5 (DB)","For Time","15–30",["33-27-21-15-9:","• DB Thrusters — "+DB2,"• Chest-to-Bar Pull-ups"],"DB thrusters."),
    W("Open 20.1 (DB GTOH)","10 RFT","15–25",["10 rounds:","• 8 Ground-to-Overhead — "+DB1,"• 10 Burpees"],"DB GTOH."),
    W("Open 20.2","AMRAP 20","20",["AMRAP 20:","• 4 DB Thrusters — "+DB2,"• 6 Toes-to-Bar","• 24 Double-unders"],"Triplet engine."),
    W("Open 20.3 (DB)","For Time","10–25",["21-15-9:","• DB Deadlifts — "+DB2,"• Handstand Push-ups","Then 21-15-9:","• DB Deadlifts — "+DB2,"• HSPU/Walk"],"Adapted."),
    W("Open 20.4 (DB C&J)","For Time","15–25",["For time:","• Box Jumps — "+BOX,"• 30 DB Clean & Jerks — "+DB2,"• Box Jumps — "+BOX],"Skip heavy bar."),
    W("Open 20.5 (Home)","For Time","20–30",["Partition any order:","• 40 Pull-ups (MU sub)","• 80 Cal Row","• 120 Wall Balls"],"Your kit."),
    W("Open 21.1","For Time","10–20",["For time:","• Wall Walks / Double-unders ladder"],"Scale reps."),
    W("Open 21.2","For Time","20–30",["Repeat 17.1:","• Alt DB Snatches — "+DB1,"• Burpee Box Jump-Overs — "+BOX],"Repeat."),
    W("Open 21.3 (DB)","For Time (3 parts)","20–30",["Parted couplets w/rest:","• DB Front Squats — "+DB2,"• Toes-to-Bar / DB Thrusters — "+DB2],"Structure preserved."),
    W("Open 22.1","AMRAP 15","20 (cap)",["AMRAP 15:","• 3 Wall Walks","• 12 DB Snatches — "+DB1,"• 15 Box Jumps — "+BOX],"Add cool-down."),
    W("Open 22.2 (DB)","For Time","20–30",["1-2-…-10-…-2-1:","• DB Deadlifts — "+DB2,"• Burpees"],"DB deadlifts."),
    W("Open 22.3 (DB Thruster)","For Time","15–30",["For time:","• 21 Pull-ups / 42 DUs / 21 DB Thrusters — "+DB2,"• 18 C2B / 36 DUs / 18 DB Thrusters — "+DB2,"• 15 Bar MU / 30 DUs / 15 DB Thrusters — "+DB2],"DB thrusters."),
    W("Open 23.2 (A)","For Time","10–20",["For time:","• Shuttle Runs","• Burpee Pull-ups"],"Skip 23.2B heavy test."),
    W("Open 23.3 (DB)","For Time (3 parts)","12–25",["Wall Walks / DU / DB Snatch","Then Strict HSPU","Then Bar MU"],"Adapt part loads.")
  ];

  /* ============================== OTHER CLASSICS / BENCHMARKS ============================== */
  const OTHER=[
    W("Fight Gone Bad (3 rnd)","AMRAP (Reps)","17",["3 rounds, 1 min stations:","• Wall Balls","• Sumo DL High Pull — "+DB1,"• Box Jumps — "+BOX,"• Push Press — "+DB1,"• Row (Calories)","Rest 1 min"],"Score = total reps."),
    W("Filthy Fifty (Home)","Chipper","30–45",["50 each:","• Box Jumps — "+BOX,"• Jumping Pull-ups","• KB Swings — "+KB35,"• Walking Lunges (50 steps)","• Knees-to-Elbows (or V-ups)","• Push Press — "+DB1,"• Supermans","• Wall Balls","• Burpees","• 50 Double-unders"],"All your kit."),
    W("The Chief (DB Clean)","Intervals 5×3:00","25–35",["5 cycles of 3-min AMRAP + 1-min rest:","• 3 DB Power Cleans — "+DB2,"• 6 Push-ups","• 9 Air Squats"],"DB for 135# bar."),
    W("DT (DB) — Other","For Time (5 rds)","15–25",["5 rounds:","• 12 DB Deadlifts — "+DB2,"• 9 DB Hang Power Cleans — "+DB2,"• 6 DB Push Jerks — "+DB2],"DB variant."),
    W("GI Jane","For Time","20–40",["For time:","• 100 Burpee Pull-ups"],"Grip saver sets."),
    W("Lumberjack 20 (Home)","For Time","30–60",["For time: 20 each:","• DB Deadlifts — "+DB2,"• KB Swings — "+KB53,"• DB Overhead Squats — "+DB1,"• DB Clean & Jerks — "+DB2,"• Burpees","• Pull-ups","• Box Jumps — "+BOX,"• DB Squat Cleans — "+DB2,"with 400m Run between each"],"DB/KB version."),
    W("Baseline","For Time","8–15",["For time:","• Row 500m","• 40 Air Squats","• 30 Sit-ups","• 20 Push-ups","• 10 Pull-ups"],"If <20, add 1k easy row."),
    W("Seven (DB)","For Time (7 rds)","30–50",["7 rounds:","• 7 Pike Push-ups","• 7 DB Thrusters — "+DB2,"• 7 V-ups","• 7 DB Deadlifts — "+DB2,"• 7 Burpees","• 7 KB Swings — "+KB53,"• 7 Pull-ups"],"Hero-inspired."),
    W("Kelly+","For Time (5 rds)","30–45",["5 rounds:","• 600m Run","• 30 Box Jumps — "+BOX,"• 30 Wall Balls"],"Longer run."),
    W("Jackie+","For Time","20–30",["For time:","• Row 2000m","• 50 Thrusters — "+DB1,"• 30 Pull-ups"],"Extended row."),
    W("5K Run","For Time","20–35",["For time:","• 5 km Run"],"Negative split."),
    W("5K Row","For Time","20–25",["For time:","• 5 km Row"],"Steady split."),
    W("Kelly (Row alt)","For Time (5 rds)","25–40",["5 rounds:","• Row 500m","• 30 Box Jumps — "+BOX,"• 30 Wall Balls"],"Row if weather sucks."),
    W("Death By Burpees","EMOM Ladder","20–30",["Min 1: 1 Burpee","Min 2: 2 Burpees","… continue until failure"],"Cap 20–30."),
    W("Death By 10m (Run)","EMOM Ladder","20–30",["Every min add 10m shuttle (start 10m)"],"Mark floor.")
  ];

  /* ============================== EXPORTS ============================== */
  window.WOD_BANK = [...GIRLS, ...HEROES, ...OPEN, ...OTHER];

  window.WOD_TRIBUTES = {
    "Murph":"Honors U.S. Navy Lt. Michael P. Murphy (Medal of Honor), killed in Afghanistan in 2005 during Operation Red Wings.",
    "Glen (Home)":"Honors former U.S. Navy SEAL Glen Doherty, killed on Sept 11, 2012 during the Benghazi attacks.",
    "Michael (Home)":"Honors Navy LT Michael McGreevy Jr., killed in Afghanistan in 2005.",
    "JT (BW)":"Honors Navy Petty Officer 1st Class Jeff Taylor, killed in Afghanistan in 2005.",
    "Daniel (DB)":"Honors Army Sgt. 1st Class Daniel Crabtree, killed in Iraq in 2006.",
    "Josh (DB OHS)":"Honors Army Staff Sgt. Joshua Whitaker, killed in Afghanistan in 2007.",
    "Jason (Bar MU)":"Honors SO1 Jason Dale Lewis, killed in Iraq in 2007.",
    "Badger (DB Squat Clean)":"Honors Navy CPO Mark Carter, killed in Iraq in 2007.",
    "Joshie (KB alt)":"Honors PO1 Joshua Harris, died in 2008.",
    "Nate (Bar MU)":"Honors PO2 Nate Hardy, killed in Iraq in 2008.",
    "Randy (DB)":"Honors LAPD SWAT Officer Randy Simmons, killed in the line of duty in 2008.",
    "Griff":"Honors SSgt Travis Griffith, USAF Pararescue, died in 2003.",
    "Ryan (BMU+Burpee)":"Honors Firefighter Ryan Hummert, killed in 2008.",
    "Erin (DB)":"Honors South Carolina Trooper Mark Coates (memorial WOD).",
    "Danny (DB PP)":"Honors Sgt. Daniel Sakai, killed in 2009.",
    "Hansen (Sub GHD)":"Honors Marine SSgt Daniel Hansen, killed in Afghanistan in 2009.",
    "Loredo":"Honors Army Staff Sgt. Edwardo Loredo, killed in Afghanistan in 2010.",
    "Gallant (WB/Run)":"Honors USN Petty Officer Marc A. Gallant, died in 2011.",
    "Weston (DB Carry)":"Honors Officer Bryon “Shane” Weston, killed in 2009.",
    "Hamilton":"Honors Army Sgt. First Class Derek Hamilton, died in 2003.",
    "Schmalls":"Honors USMC Sgt. Justin E. Schmalls, died in 2008.",
    "Bradley":"Honors U.S. Army 1LT Bradley A. Smith, killed in Afghanistan in 2010.",
    "Riley":"Honors Army Sgt. 1st Class Riley Stephens, killed in Afghanistan in 2012.",
    "Severin":"Honors U.S. Army Sgt. Severin Summers, killed in Afghanistan in 2009.",
    "Helton (DB)":"Honors USAF 1st Lt. Joseph Helton, killed in Iraq in 2009.",
    "Jack (DB PP)":"Honors U.S. Army Staff Sgt. Jack M. Martin III, killed in 2009.",
    "Forrest":"Honors USAF Pararescueman SSgt Forrest Sibley, killed in 2015.",
    "Omar (DB Thruster)":"Honors U.S. Army 1st Lt. Omar Vazquez, killed in Iraq in 2011.",
    "Arnie (KB)":"Honors LA County Firefighter Arnaldo “Arnie” Quinones, died in 2009.",
    "Jerry":"Honors U.S. Army Sgt. Maj. Jerry D. Patton, died during training in 2008.",
    "Ship (DB/Row)":"Honors U.S. Navy Lt. Jon “Ship” Shipman, died in 2009.",
    "DT (DB)":"Honors USAF SSgt Timothy P. Davis (callsign “DT”), killed in Afghanistan in 2009.",
    "Manion (DB Front Squat)":"Honors 1st Lt. Travis Manion, USMC, killed in Iraq in 2007.",
    "Sisson (PU sub)":"Honors U.S. Army 1LT Donnie W. Sisson, died in 2011.",
    "Blake (DB OH Lunge)":"Honors U.S. Navy SEAL Lt. Brendan Looney, killed in 2010.",
    "White (PU sub)":"Honors U.S. Army 1LT Ashley White-Stumpf, killed in Afghanistan in 2011.",
    "Roy (DB DL)":"Honors USMC Sgt. Michael C. Roy, killed in Afghanistan in 2009.",
    "Holleyman (DB Clean)":"Honors U.S. Army Staff Sgt. Aaron N. Holleyman, killed in Iraq in 2004.",
    "McGhee (DB DL)":"Honors USMC Cpl. Ryan C. McGhee, killed in Iraq in 2009.",
    "Kalsu (DB Thruster)":"Honors 1LT James Robert Kalsu (US Army/ Buffalo Bills), killed in Vietnam in 1970.",
    'Chad 1000X (24")':"Honors Navy SEAL Chad Wilkinson, died by suicide in 2018; WOD raises awareness for veteran mental health.",
    "Luce":"Honors Capt. Ronald A. Luce Jr., USAF, killed in 2009.",
    "Jared (BW)":"Honors U.S. Army Capt. Jared C. Monti, Medal of Honor, KIA Afghanistan 2006."
  };
})();