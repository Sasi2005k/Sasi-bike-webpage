// Mock Database for development (Self-contained)
export const mockData = {
    posts: [
      {
        id: '1',
        title: 'Midnight Scrambler',
        description: 'Custom matte black finish with scrambler bars.',
        images: ['/images/modified.png'],
        type: 'modification',
        category: 'Paint',
        cost: 450,
        user: 'Rider_007',
        likes: 12
      },
      {
          id: '2',
          title: 'Himalayan Escape',
          description: 'A 500km journey through the mountains.',
          images: ['/images/ride.png'],
          type: 'ride_story',
          category: 'Touring',
          user: 'HunterKing',
          likes: 24
        }
    ],
    gallery: [
      { id: '1', src: '/images/hero.png', category: 'Stock', title: 'Factory Fresh' },
      { id: '2', src: '/images/modified.png', category: 'Modified', title: 'Dark Edition' },
      { id: '3', src: '/images/ride.png', category: 'Rides', title: 'Mountain Escape' },
    ]
  };
