// wods.js — Known WODs for BAMBAM (HOME GEAR)
// Paste as-is next to index.html

(function () {
  var DB1 = '1x50 lb';
  var DB2 = '2x50 lb';
  var KB53 = '53 lb';
  var KB35 = '35 lb';
  var BOX  = '24"';

  function W(title,type,time,body,notes){ return {title:title,type:type,time:time,body:body,notes:notes||''}; }

  // ----- Optional date overrides (index also pins holidays automatically)
  window.WOD_DATE_MAP = {
    '09-11':'Glen (Home)',
    '07-04':'Kalsu (DB Thruster)',
    '11-11':'Chad 1000X (24")',
    '12-25':'12 Days of Christmas (Home)'
  };

  // ----- Girls / Classics (home-gear variants where needed)
  var GIRLS = [
    W('Angie','For Time','20-40',[
      'For time:','100 Pull-ups','100 Push-ups','100 Sit-ups','100 Air Squats'
    ],'Partition as needed.'),
    W('Annie','For Time','10-20',[
      'For time:','50-40-30-20-10 Double-unders','50-40-30-20-10 Sit-ups'
    ]),
    W('Barbara','For Time (5 rds)','40-50',[
      '5 rounds:','20 Pull-ups','30 Push-ups','40 Sit-ups','50 Air Squats','Rest 3 min'
    ]),
    W('Chelsea','EMOM 30','30',[
      'Every minute for 30:','5 Pull-ups','10 Push-ups','15 Air Squats'
    ]),
    W('Cindy','AMRAP 20','20',[
      'AMRAP 20:','5 Pull-ups','10 Push-ups','15 Air Squats'
    ]),
    W('Diane (DB)','For Time','10-20',[
      '21-15-9:','DB Deadlifts - '+DB2,'Handstand Push-ups'
    ]),
    W('Elizabeth (DB)','For Time','10-20',[
      '21-15-9:','DB Squat Cleans - '+DB2,'Push-ups (dip sub)'
    ]),
    W('Fran (DB)','For Time','10-20',[
      '21-15-9:','DB Thrusters - '+DB2,'Pull-ups'
    ]),
    W('Grace (DB C&J)','For Time','8-20',[
      'For time:','30 DB Clean and Jerks - '+DB2
    ]),
    W('Helen','For Time (3 rds)','12-20',[
      '3 rounds:','400m Run','21 KB Swings - '+KB53,'12 Pull-ups'
    ]),
    W('Isabel (DB Snatch)','For Time','8-15',[
      'For time:','30 Alt DB Snatches - '+DB1
    ]),
    W('Jackie (DB Thruster)','For Time','12-20',[
      'For time:','Row 1000m','50 Thrusters - '+DB1,'30 Pull-ups'
    ]),
    W('Karen','For Time','12-20',['For time:','150 Wall Balls']),
    W('Kelly','For Time (5 rds)','25-40',[
      '5 rounds:','400m Run','30 Box Jumps - '+BOX,'30 Wall Balls'
    ]),
    W('Mary','AMRAP 20','20',[
      'AMRAP 20:','5 Handstand Push-ups','10 Pistols (alt)','15 Pull-ups'
    ]),
    W('Megan','For Time','12-25',[
      '21-15-9:','Burpees','KB Swings - '+KB53,'Double-unders'
    ]),
    W('Nancy (DB/KB OHS)','For Time (5 rds)','20-35',[
      '5 rounds:','400m Run','15 Overhead Squats - single DB/KB'
    ]),
    W('Nicole','AMRAP 20','20',['AMRAP 20:','400m Run','Max Pull-ups'])
  ];

  // ----- Hero WODs (home-gear variants kept)
  var HEROES = [
    W('Murph','For Time','40-60',['For time:','1 mile Run','100 Pull-ups','200 Push-ups','300 Air Squats','1 mile Run'],'Partition as needed.'),
    W('Glen (Home)','For Time','45-60',['For time:','1 mile Run','100 Pull-ups','200 Push-ups','300 Sit-ups','1 mile Run']),
    W('Michael (Home)','For Time (3 rds)','20-35',['3 rounds:','800m Run','50 Sit-ups','50 Supermans']),
    W('JT (BW)','For Time','10-25',['21-15-9:','Handstand Push-ups','Push-ups','Dips or deficit push-ups']),
    W('Daniel (DB)','For Time','20-35',['For time:','50 DB Thrusters - '+DB2,'400m Run','21 Pull-ups','800m Run','21 Pull-ups','400m Run','50 DB Thrusters - '+DB2]),
    W('Josh (DB OHS)','For Time','20-35',['For time:','21 Overhead Squats - '+DB1,'42 Pull-ups','15 Overhead Squats - '+DB1,'30 Pull-ups','9 Overhead Squats - '+DB1,'18 Pull-ups']),
    W('Jason (Bar MU)','For Time','20-40',['For time:','100 Squats','5 Bar Muscle-ups','75 Squats','10 Bar Muscle-ups','50 Squats','15 Bar Muscle-ups','25 Squats','20 Bar Muscle-ups']),
    W('Badger (DB Squat Clean)','For Time (3 rds)','30-50',['3 rounds:','30 DB Squat Cleans - '+DB2,'30 Pull-ups','800m Run']),
    W('Joshie (KB alt)','For Time (3 rds)','25-45',['3 rounds:','21 KB Snatches (L) - '+KB53,'21 KB Snatches (R) - '+KB53,'42 Pull-ups']),
    W('Nate (Bar MU)','AMRAP 20','20',['AMRAP 20:','2 Bar Muscle-ups','4 Handstand Push-ups','8 KB Swings - '+KB53]),
    W('Randy (DB)','For Time','5-12',['For time:','75 Alt DB Snatches - '+DB1]),
    W('Griff','For Time','10-20',['For time:','800m Run','400m Run (backward)','800m Run','400m Run (backward)']),
    W('Ryan (BMU+Burpee)','5 RFT','20-35',['5 rounds:','7 Bar Muscle-ups','21 Burpees']),
    W('Erin (DB)','For Time (5 rds)','30-45',['5 rounds:','15 DB Split Cleans - '+DB1,'21 Pull-ups']),
    W('Danny (DB PP)','AMRAP 20','20',['AMRAP 20:','30 Box Jumps - '+BOX,'20 DB Push Press - '+DB2,'30 Pull-ups']),
    W('Hansen (Sub GHD)','For Time (5 rds)','25-45',['5 rounds:','30 KB Swings - '+KB53,'30 Burpees','30 Sit-ups']),
    W('Loredo','For Time (6 rds)','25-45',['6 rounds:','24 Air Squats','24 Push-ups','24 Walking Lunges','400m Run']),
    W('Gallant (WB/Run)','For Time','25-45',['For time:','1 km Run','60 Burpees','800m Run','30 Wall Balls','400m Run']),
    W('Weston (DB Carry)','For Time (5 rds)','30-50',['5 rounds:','100m DB Farmers Carry - '+DB2,'100m DB Front Rack Carry - '+DB2,'100m DB Overhead Carry - '+DB1]),
    W('Hamilton','For Time (3 rds)','35-55',['3 rounds:','Row 1000m','50 Push-ups','Run 1000m','50 Pull-ups']),
    W('Schmalls','For Time','30-50',['For time:','800m Run','50 Burpees','50 Pull-ups','50 KB Swings - '+KB53,'50 Sit-ups','800m Run']),
    W('Bradley','For Time (10 rds)','30-50',['10 rounds:','Sprint 100m','10 Pull-ups','100m Jog','Rest 30s']),
    W('Riley','For Time','40-60',['For time:','Run 1.5 miles','150 Burpees','Run 1.5 miles']),
    W('Severin','For Time','30-50',['For time:','50 Strict Pull-ups','100 Hand-Release Push-ups','5 km Run']),
    W('Helton (DB)','For Time (3 rds)','25-45',['3 rounds:','800m Run','30 DB Squat Cleans - '+DB2,'30 Burpees']),
    W('Jack (DB PP)','AMRAP 20','20',['AMRAP 20:','10 DB Push Press - '+DB2,'10 KB Swings - '+KB53,'10 Box Jumps - '+BOX]),
    W('Forrest','For Time (3 rds)','30-45',['3 rounds:','20 L-Pull-ups','30 Toes-to-Bar','40 Burpees','800m Run']),
    W('Omar (DB Thruster)','For Time','20-35',['For time:','10 DB Thrusters - '+DB2,'15 Burpees','20 DB Thrusters - '+DB2,'25 Burpees','30 DB Thrusters - '+DB2,'35 Burpees']),
    W('Arnie (KB)','For Time','25-45',['For time:','21 Turkish Get-Ups (R) - '+KB53,'50 KB Swings - '+KB53,'21 Overhead Squats (L) - '+KB53]),
    W('Jerry','For Time','20-40',['For time:','Run 1 mile','Row 2 km','Run 1 mile']),
    W('Ship (DB/Row)','For Time (9 rds)','35-55',['9 rounds:','7 DB Hang Power Cleans - '+DB2,'8 Burpees','9 Push-ups','Row 200m']),
    W('DT (DB)','For Time (5 rds)','15-25',['5 rounds:','12 DB Deadlifts - '+DB2,'9 DB Hang Power Cleans - '+DB2,'6 DB Push Jerks - '+DB2]),
    W('Manion (DB Front Squat)','For Time (7 rds)','30-50',['7 rounds:','400m Run','29 DB Front Squats - '+DB2]),
    W('Sisson (PU sub)','AMRAP 20','20',['AMRAP 20:','10 Pull-ups','5 Burpees','Run 200m']),
    W('Blake (DB OH Lunge)','For Time (4 rds)','30-50',['4 rounds:','100 ft DB Overhead Lunge - '+DB1,'30 Box Jumps - '+BOX,'20 Wall Balls','10 Handstand Push-ups']),
    W('White (PU sub)','For Time (5 rds)','30-50',['5 rounds:','15 Pull-ups','10 Toes-to-Bar','400m Run']),
    W('Roy (DB DL)','For Time (5 rds)','25-45',['5 rounds:','15 DB Deadlifts - '+DB2,'20 Box Jumps - '+BOX,'25 Pull-ups']),
    W('Holleyman (DB Clean)','For Time (30 rds)','30-50',['30 rounds:','5 Wall Balls','3 Handstand Push-ups','1 DB Clean - '+DB2]),
    W('McGhee (DB DL)','AMRAP 30','30',['AMRAP 30:','5 DB Deadlifts - '+DB2,'13 Push-ups','9 Box Jumps - '+BOX]),
    W('Kalsu (DB Thruster)','For Time','30-60',['For time:','100 DB Thrusters - '+DB2,'At the top of every minute: 5 Burpees']),
    W('Chad 1000X (24")','For Time','30-60',['For time:','1,000 Box Step-ups - '+BOX]),
    W('Luce','For Time (3 rds)','25-45',['3 rounds:','Run 1000m','10 Bar Muscle-ups','100 Air Squats']),
    W('Jared (BW)','For Time (4 rds)','25-45',['4 rounds:','800m Run','40 Pull-ups','70 Push-ups'])
  ];

  // ----- Open and other classics (DB/Box/PU friendly)
  var OPEN = [
    W('Open 11.1 / 14.1 (DB)','AMRAP 10','20 (cap)',['AMRAP 10:','30 Double-unders','15 Alt DB Snatches - '+DB1]),
    W('Open 12.1','AMRAP 7','20 (cap)',['AMRAP 7:','Burpees']),
    W('Open 13.2 (DB)','AMRAP 10','20 (cap)',['AMRAP 10:','5 DB Shoulder-to-Overhead - '+DB2,'10 DB Deadlifts - '+DB2,'15 Box Jumps - '+BOX]),
    W('Open 13.4 (DB C&J)','AMRAP 7','20 (cap)',['AMRAP ladder 3-6-9...:','DB Clean and Jerks - '+DB2,'Toes-to-Bar']),
    W('Open 14.4 (DB) / 23.1','AMRAP 14','20 (cap)',['AMRAP 14:','Row 60 Cal','50 Toes-to-Bar','40 Wall Balls','30 DB Cleans - '+DB2,'20 Bar Muscle-ups']),
    W('Open 14.5 / 16.5 (DB)','For Time','20-30',['21-18-15-12-9-6-3:','DB Thrusters - '+DB2,'Burpees']),
    W('Open 15.1 (DB)','AMRAP 9','20 (cap)',['AMRAP 9:','Toes-to-Bar','DB Deadlifts - '+DB2,'Alt DB Snatches - '+DB1]),
    W('Open 15.3','AMRAP 14','20 (cap)',['AMRAP 14:','7 Bar Muscle-ups or Pull-ups','50 Wall Balls','100 Double-unders']),
    W('Open 15.5 (DB)','For Time','15-25',['For time:','Row 27-21-15-9 Cal','DB Thrusters - '+DB2]),
    W('Open 16.1 (DB OH Lunge)','AMRAP 20','20',['25 ft OH Lunge - '+DB1,'8 Burpees','25 ft OH Lunge','8 Chest-to-Bar']),
    W('Open 16.2 (DB)','Every 4:00','20-28',['T2B / Double-unders / DB Squat Cleans - '+DB2+' (ascending)']),
    W('Open 16.3 (DB + BMU)','AMRAP 7','20 (cap)',['AMRAP 7:','10 Alt DB Snatches - '+DB1,'3 Bar Muscle-ups']),
    W('Open 16.4 / 17.4 (DB)','AMRAP 13','20 (cap)',['AMRAP 13:','55 DB Deadlifts - '+DB2,'55 Wall Balls','55 Cal Row','55 Handstand Push-ups']),
    W('Open 17.1 / 21.2 (DB)','For Time','20-30',['10-20-30-40-50:','Alt DB Snatches - '+DB1,'After each set: 15 Burpee Box Jump-Overs - '+BOX]),
    W('Open 17.2 (DB)','AMRAP 12','20 (cap)',['AMRAP 12:','50 ft DB Front Rack Lunge - '+DB2,'16 Toes-to-Bar','8 DB Power Cleans - '+DB2]),
    W('Open 17.5 (DB)','10 RFT','20-30',['10 rounds:','9 DB Thrusters - '+DB2,'35 Double-unders']),
    W('Open 18.1','AMRAP 20','20',['AMRAP 20:','8 Toes-to-Bar','10 DB Hang Clean and Jerks - '+DB1,'14/12 Cal Row']),
    W('Open 18.2 (DB)','For Time + Heavy','10-20',['1-2-3-...-10:','DB Squats - '+DB2,'Burpees']),
    W('Open 18.3','AMRAP 14','20 (cap)',['AMRAP 14:','100 Double-unders','20 Alt DB Snatches - '+DB1,'100 Double-unders','12 Bar Muscle-ups']),
    W('Open 18.4 (DB)','For Time','10-25',['21-15-9:','DB Deadlifts - '+DB2,'Handstand Push-ups','then 21-15-9:','DB Deadlifts - '+DB2,'Handstand Walk or Bear Crawl']),
    W('Open 18.5 (DB)','AMRAP 7','10-20',['AMRAP 7:','Thrusters - '+DB2,'Chest-to-Bar Pull-ups']),
    W('Open 19.1','AMRAP 15','20 (cap)',['AMRAP 15:','19 Wall Balls','19 Cal Row']),
    W('Open 19.2 (DB)','Every 4:00','20-28',['T2B / Double-unders / DB Squat Cleans - '+DB2+' (ascending)']),
    W('Open 19.3 (DB/Box)','For Time','12-25',['For time:','200 ft DB OH Lunges - '+DB1,'50 DB Box Step-ups - '+BOX,'50 Strict HSPU']),
    W('Open 19.4 (DB + BMU)','For Time (2 parts)','16-20',['Part A 12 min: 3 rds of 10 DB Snatches - '+DB1+' / 12 Bar MU','Rest 3 min','Part B 4 min: 30 Burpees']),
    W('Open 19.5 (DB)','For Time','15-30',['33-27-21-15-9:','DB Thrusters - '+DB2,'Chest-to-Bar Pull-ups']),
    W('Open 20.1 (DB GTOH)','10 RFT','15-25',['10 rounds:','8 DB Ground-to-Overhead - '+DB1,'10 Burpees']),
    W('Open 20.2','AMRAP 20','20',['AMRAP 20:','4 DB Thrusters - '+DB2,'6 Toes-to-Bar','24 Double-unders']),
    W('Open 20.3 (DB)','For Time','10-25',['21-15-9:','DB Deadlifts - '+DB2,'Handstand Push-ups','then 21-15-9:','DB Deadlifts - '+DB2,'HSPU/Walk']),
    W('Open 20.4 (DB C&J)','For Time','15-25',['For time:','Box Jumps - '+BOX,'30 DB Clean and Jerks - '+DB2,'Box Jumps']),
    W('Open 20.5 (Home)','For Time','20-30',['Partition any order:','40 Pull-ups (MU sub)','80 Cal Row','120 Wall Balls']),
    W('Open 21.1','For Time','10-20',['For time:','Wall Walks / Double-unders ladder']),
    W('Open 21.2','For Time','20-30',['Repeat 17.1:','Alt DB Snatches - '+DB1,'Burpee Box Jump-Overs - '+BOX]),
    W('Open 21.3 (DB)','For Time (3 parts)','20-30',['Parted couplets with rest:','DB Front Squats - '+DB2,'Toes-to-Bar / DB Thrusters - '+DB2]),
    W('Open 22.1','AMRAP 15','20 (cap)',['AMRAP 15:','3 Wall Walks','12 DB Snatches - '+DB1,'15 Box Jumps - '+BOX]),
    W('Open 22.2 (DB)','For Time','20-30',['1-2-...-10-...-2-1:','DB Deadlifts - '+DB2,'Burpees']),
    W('Open 22.3 (DB Thruster)','For Time','15-30',['For time:','21 Pull-ups / 42 DUs / 21 DB Thrusters - '+DB2,'18 C2B / 36 DUs / 18 DB Thrusters - '+DB2,'15 Bar MU / 30 DUs / 15 DB Thrusters - '+DB2]),
    W('Open 23.2 (A)','For Time','10-20',['For time:','Shuttle Runs','Burpee Pull-ups']),
    W('Open 23.3 (DB)','For Time (3 parts)','12-25',['Wall Walks / Double-unders / DB Snatch','then Strict HSPU','then Bar MU'])
  ];

  // ----- Other staples
  var OTHER = [
    W('Fight Gone Bad (3 rnd)','AMRAP (Reps)','17',[
      '3 rounds, 1 min each:','Wall Balls','Sumo DL High Pull - '+DB1,'Box Jumps - '+BOX,'Push Press - '+DB1,'Row (Calories)','Rest 1 min'
    ],'Score is total reps.'),
    W('Filthy Fifty (Home)','Chipper','30-45',[
      '50 each:','Box Jumps - '+BOX,'Jumping Pull-ups','KB Swings - '+KB35,'Walking Lunges (50 steps)','Knees-to-Elbows or V-ups','Push Press - '+DB1,'Supermans','Wall Balls','Burpees','Double-unders (50)'
    ]),
    W('The Chief (DB Clean)','Intervals 5x3:00','25-35',[
      '5 cycles of 3-min AMRAP + 1-min rest:','3 DB Power Cleans - '+DB2,'6 Push-ups','9 Air Squats'
    ]),
    W('Baseline','For Time','8-15',['For time:','Row 500m','40 Air Squats','30 Sit-ups','20 Push-ups','10 Pull-ups']),
    W('5K Run','For Time','20-35',['For time:','5 km Run']),
    W('5K Row','For Time','20-25',['For time:','5 km Row']),
    W('Kelly (Row alt)','For Time (5 rds)','25-40',['5 rounds:','Row 500m','30 Box Jumps - '+BOX,'30 Wall Balls']),
    W('Death By Burpees','EMOM Ladder','20-30',['Minute 1: 1 Burpee','Minute 2: 2 Burpees','Continue until failure']),
    W('Death By 10m (Run)','EMOM Ladder','20-30',['Every minute add 10m shuttle (start 10m)']),
    W('Seven (DB)','For Time (7 rds)','30-50',['7 rounds:','7 Pike Push-ups','7 DB Thrusters - '+DB2,'7 V-ups','7 DB Deadlifts - '+DB2,'7 Burpees','7 KB Swings - '+KB53,'7 Pull-ups']),
    W('Kelly+','For Time (5 rds)','30-45',['5 rounds:','600m Run','30 Box Jumps - '+BOX,'30 Wall Balls']),
    W('Jackie+','For Time','20-30',['For time:','Row 2000m','50 Thrusters - '+DB1','30 Pull-ups']),
    W('Lumberjack 20 (Home)','For Time','30-60',['For time, 20 each:','DB Deadlifts - '+DB2,'KB Swings - '+KB53,'DB Overhead Squats - '+DB1,'DB Clean and Jerks - '+DB2,'Burpees','Pull-ups','Box Jumps - '+BOX,'DB Squat Cleans - '+DB2,'with 400m run between each'])
  ];

  // export
  window.WOD_BANK = [].concat(GIRLS, HEROES, OPEN, OTHER);

  window.WOD_TRIBUTES = {
    'Murph':'Honors U.S. Navy Lt. Michael P. Murphy (MOH), killed in Afghanistan in 2005.',
    'Glen (Home)':'Honors former U.S. Navy SEAL Glen Doherty, killed on Sept 11, 2012 (Benghazi).',
    'Michael (Home)':'Honors Navy LT Michael McGreevy Jr., KIA 2005.',
    'JT (BW)':'Honors PO1 Jeff Taylor, KIA 2005.',
    'Daniel (DB)':'Honors SFC Daniel Crabtree, KIA 2006.',
    'Josh (DB OHS)':'Honors SSG Joshua Whitaker, KIA 2007.',
    'Jason (Bar MU)':'Honors SO1 Jason Dale Lewis, KIA 2007.',
    'Badger (DB Squat Clean)':'Honors CPO Mark Carter, KIA 2007.',
    'Joshie (KB alt)':'Honors PO1 Joshua Harris, died 2008.',
    'Nate (Bar MU)':'Honors PO2 Nate Hardy, KIA 2008.',
    'Randy (DB)':'Honors Officer Randy Simmons (LAPD SWAT), KIA 2008.',
    'Griff':'Honors SSgt Travis Griffith, USAF Pararescue, died 2003.',
    'Ryan (BMU+Burpee)':'Honors Firefighter Ryan Hummert, KIA 2008.',
    'Erin (DB)':'Memorial WOD for Trooper Mark Coates.',
    'Danny (DB PP)':'Honors Sgt. Daniel Sakai, KIA 2009.',
    'Hansen (Sub GHD)':'Honors SSgt Daniel Hansen, USMC, KIA 2009.',
    'Loredo':'Honors SSG Edwardo Loredo, KIA 2010.',
    'Gallant (WB/Run)':'Honors PO Marc A. Gallant, died 2011.',
    'Weston (DB Carry)':'Honors Officer Bryon Shane Weston, KIA 2009.',
    'Hamilton':'Honors SFC Derek Hamilton, died 2003.',
    'Schmalls':'Honors Sgt. Justin E. Schmalls, died 2008.',
    'Bradley':'Honors 1LT Bradley A. Smith, KIA 2010.',
    'Riley':'Honors SFC Riley Stephens, KIA 2012.',
    'Severin':'Honors Sgt. Severin Summers, KIA 2009.',
    'Helton (DB)':'Honors 1st Lt. Joseph Helton, KIA 2009.',
    'Jack (DB PP)':'Honors SSG Jack M. Martin III, KIA 2009.',
    'Forrest':'Honors SSgt Forrest Sibley, KIA 2015.',
    'Omar (DB Thruster)':'Honors 1st Lt. Omar Vazquez, KIA 2011.',
    'Arnie (KB)':'Honors Firefighter Arnaldo Quinones, died 2009.',
    'Jerry':'Honors Sgt. Maj. Jerry D. Patton, died 2008.',
    'Ship (DB/Row)':'Honors Lt. Jon Shipman, died 2009.',
    'DT (DB)':'Honors SSgt Timothy P. Davis, KIA 2009.',
    'Manion (DB Front Squat)':'Honors 1st Lt. Travis Manion, KIA 2007.',
    'Sisson (PU sub)':'Honors 1LT Donnie W. Sisson, died 2011.',
    'Blake (DB OH Lunge)':'Honors Lt. Brendan Looney, KIA 2010.',
    'White (PU sub)':'Honors 1LT Ashley White-Stumpf, KIA 2011.',
    'Roy (DB DL)':'Honors Cpl. Michael C. Roy, KIA 2009.',
    'Holleyman (DB Clean)':'Honors SSG Aaron N. Holleyman, KIA 2004.',
    'McGhee (DB DL)':'Honors Cpl. Ryan C. McGhee, KIA 2009.',
    'Kalsu (DB Thruster)':'Honors 1LT James Robert Kalsu (Vietnam 1970).',
    'Chad 1000X (24")':'Honors Navy SEAL Chad Wilkinson (2018).',
    'Luce':'Honors Capt. Ronald A. Luce Jr., USAF, KIA 2009.',
    'Jared (BW)':'Honors Capt. Jared C. Monti (MOH), KIA 2006.'
  };
})();