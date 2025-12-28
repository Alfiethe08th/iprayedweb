import { Prayer, User } from '../model/prayer.model';

export const USERS: User[] = [
  {
    id: 'morning',
    name: 'Morning Prayer',
    totalCount: 98210,
    peopleCount: 12842,
    countries: [
      { country: 'India', count: 21000 },
      { country: 'USA', count: 18000 },
      { country: 'Nepal', count: 12000 }
    ]
  },
  {
    id: 'gratitude',
    name: 'Evening Gratitude',
    totalCount: 65400,
    peopleCount: 9430,
    countries: [
      { country: 'Japan', count: 14000 },
      { country: 'UK', count: 9000 }
    ]
  },
];

export const PRAYERS: Prayer[] = [
  {
    id: '1',
    name: 'Praise to Buddha Shakyamuni',
    deity: 'Shakyamuni Buddha (Historical Buddha)',
    purpose: 'Homage to the source of Dharma and request for wisdom.'
  },
  {
    id: '2',
    name: 'Twenty-One Praises to Tara (Dolma-bum)',
    deity: 'Tara (specifically 21 emanations)',
    purpose: 'Removing obstacles, protection from fears, and fulfilling wishes.'
  },
  {
    id: '3',
    name: 'Medicine Buddha Puja/Mantra',
    deity: 'Medicine Buddha (Sang-gyay Men-la)',
    purpose: 'Healing physical, mental, and emotional ailments.'
  },
  {
    id: '4',
    name: 'Prayer to Chenrezig',
    deity: 'Avalokiteshvara (Chenrezig)',
    purpose: 'Cultivating compassion and seeking liberation from cyclic existence.'
  },
  {
    id: '5',
    name: 'Praise to the Intelligent One',
    deity: 'Manjushri',
    purpose: 'Cultivating wisdom and clearing the darkness of ignorance.'
  },
  {
    id: '6',
    name: '100 Deities Liturgy (Shi Thro)',
    deity: '100 Peaceful and Wrathful Deities',
    purpose: 'Familiarizing oneself with these deities for the intermediate state (Bardo) after death.'
  },
  {
    id: '7',
    name: 'Vajrasattva 100-Syllable Mantra',
    deity: 'Vajrasattva',
    purpose: 'Purification of negative karma and obscurations.'
  },
  {
    id: '8',
    name: 'Long Life Ritual (Nam-gyal Tse-chok)',
    deity: 'Namgyalma (Ushnishavijaya)',
    purpose: 'Prayer for longevity and long life.'
  },
  {
    id: '9',
    name: 'Amitabha Mantra/Pureland Prayer',
    deity: 'Amitabha Buddha',
    purpose: 'Overcoming hindrances and seeking rebirth in the Blissful Pure Land (Dewachen).'
  },
  {
    id: '10',
    name: 'Cutting Through the Ego (Chöd)',
    deity: 'Various (often involving Machig Labdrön)',
    purpose: 'Subduing self-cherishing thought and ignorance.'
  }
]