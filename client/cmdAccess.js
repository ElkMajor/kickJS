async function userHasAccess(userBadges, requiredLevel) {
    const badgeLevels = {
      broadcaster: 6,
      moderator: 5,
      og: 4,
      vip: 3,
      subscriber: 2,
      user: 1,
    };
  
    const userHighestBadgeLevel = userBadges.reduce((highestLevel, badge) => {
      const badgeName = badge.toLowerCase(); // Convert to lowercase for consistency
      const badgeLevel = badgeLevels[badgeName] || 1; // Default to level 1 if badge not found
      return Math.max(highestLevel, badgeLevel);
    }, 1);
  
    return userHighestBadgeLevel >= requiredLevel;
  }

  module.exports = userHasAccess;