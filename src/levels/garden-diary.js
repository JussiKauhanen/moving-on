// Diary entries the gardener writes as the day goes on.
// Each part is either `text` (written out by hand, one paragraph per string)
// or `note` (a scrap of someone else's writing, taped onto the page).
export const gardenDiary = {
  arrival: {
    parts: [
      {
        text: [
          "First real job!",
          "The bus left me right at the gate of Briar House. Nobody has lived here for a long time. The grass is up to my knees and every window is dark.",
          "I don't care. I'm going to make this garden beautiful again. Clippers, a bit of patience, done by dusk.",
        ],
      },
    ],
  },
  note: {
    parts: [
      {
        text: ["Found a note pinned up in the shed. Somebody called M. left it for me:"],
      },
      {
        note: [
          "The tools in here are yours to use. The clippers are a bit stiff — there's oil and a stone in the little shelter across the garden.",
          "Mind the flower beds. Pull what you can. A little care makes all the difference.",
          "You needn't go into the house. No matter what you hear.",
          "— M.",
        ],
      },
      {
        text: [
          "No matter what you hear.",
          "Funny. It's so quiet here I can hear my own heartbeat.",
        ],
      },
    ],
  },
};
