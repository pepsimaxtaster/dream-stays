import { Ratio } from "react-bootstrap";

let stays = [
  {
    id: "TheColosseum",
    name: "The Colosseum",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
    description:
      "The Colosseum, also named the Flavian Amphitheater, is a large amphitheater in Rome. It was built during the reign of the Flavian emperors as a gift to the Roman people. Construction of the Colosseum began sometime between C.E. 70 and 72 under the emperor Vespasian.",
    nearby: [""],
    price: "€18 per person",
  },
  {
    id: "TreviFountain",
    name: "Trevi Fountain",
    img: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Trevi Fountain, built in the 1700s, is perhaps one of Rome's most iconic structures. Erected on the site of an ancient Roman water source, the fountain is made of the same material as the Colosseum (travertine stone). The Trevi Fountain serves as a modern marvel that links back to Rome's fabled past",
    nearby: [""],
    price: "free to visit",
  },
  {
    id: "Pantheon",
    name: "Pantheon",
    img: "https://media.istockphoto.com/id/1481655065/photo/the-pantheon.webp?b=1&s=170667a&w=0&k=20&c=TceuLJKxPdlCDGt39I8AUC5g1lpEP107ttzj_KGKOD8=",
    description:
      "The Pantheon is a state property, managed by Italy's Ministry of Cultural Heritage and Activities and Tourism through the Polo Museale del Lazio. In 2013, it was visited by over six million people. The Pantheon's large circular domed cella, with a conventional temple portico front, was unique in Roman architecture.",
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
