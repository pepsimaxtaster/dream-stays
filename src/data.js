import { Ratio } from "react-bootstrap";

let stays = [
  {
    id: "TheColosseum",
    name: "The Colosseum",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    description:
      "Also named the Flavian Amphitheater, this a large amphitheater in Rome was built during the reign of the Flavian emperors as a gift to the Roman people. Construction began sometime between C.E. 70 and 72 under the emperor Vespasian. Explore history and experience how the gladiators felt as you walk through the tunnels",
    nearby: [""],
    price: "€18 per person",
  },
  {
    id: "TreviFountain",
    name: "Trevi Fountain",
    img: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Trevi Fountain was built in the 1700s and is one of Rome's most iconic structures. Uses the same ancient water the romans saw, and is made of the same material as the Colosseum (travertine stone). The Trevi Fountain serves as a reminder that links us to Rome's fabled past. Take part of a tradition older than your parents as you enjoy food from the nearby maze of streets",
    nearby: [""],
    price: "free to visit",
  },
  {
    id: "Pantheon",
    name: "Pantheon",
    img: "https://media.istockphoto.com/id/1481655065/photo/the-pantheon.webp?b=1&s=170667a&w=0&k=20&c=TceuLJKxPdlCDGt39I8AUC5g1lpEP107ttzj_KGKOD8=",
    description:
      "The Pantheon is extremely important as it is managed by Italy's Ministry of Cultural Heritage, Activities, Tourism through the Polo Museale del Lazio. In 2013, it was visited by over six million people. The Pantheon's large circular domed cella, with a conventional temple portico front, was unique in Roman architecture. Witness the tombs of ancients and stare into the eye of the pantheon as you walk across the simple beauty of the marble floors",
    nearby: [""],
    price: "Adults: €5  /    Youth under 25: €2   /   Children: Free",
  },
];

export function getStays() {
  return stays;
}

export function getStay(id) {
  return stays.find((stay) => stay.id === id);
}
