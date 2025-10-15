import axios from 'axios';

/**
 * Fetch partner invitation status for a specific tournament and partner
 * @param {string} tournamentId - The tournament ID
 * @param {string} partnerId - The partner's user ID
 * @returns {Promise<string>} - The invitation status ('pending', 'accepted', 'declined')
 */
export const getPartnerInvitationStatus = async (tournamentId, partnerId) => {
  try {
    const response = await axios.get(`/api/notifications/partner-invitation/status/${tournamentId}/${partnerId}`);
    
    if (response.data.success) {
      return response.data.status || 'pending';
    }
    
    return 'pending'; // Default fallback
  } catch (error) {
    console.error('Error fetching partner invitation status:', error);
    return 'pending'; // Default fallback on error
  }
};

/**
 * Batch fetch partner invitation statuses for multiple registrations
 * @param {Array} registrations - Array of registration objects with partner and tournament info
 * @returns {Promise<Object>} - Object mapping registration IDs to partner statuses
 */
export const batchGetPartnerStatuses = async (registrations) => {
  const statusPromises = registrations
    .filter(reg => reg.partner && reg.partner._id) // Only process registrations with partners
    .map(async (reg) => {
      const status = await getPartnerInvitationStatus(reg.tournamentId, reg.partner._id);
      return {
        registrationId: reg._id,
        partnerId: reg.partner._id,
        status
      };
    });

  try {
    const results = await Promise.all(statusPromises);
    
    // Convert array to object for easy lookup
    const statusMap = {};
    results.forEach(result => {
      statusMap[result.registrationId] = result.status;
    });
    
    return statusMap;
  } catch (error) {
    console.error('Error batch fetching partner statuses:', error);
    return {}; // Return empty object on error
  }
};

/**
 * Get the display style for partner status
 * @param {string} status - The partner invitation status
 * @returns {Object} - Style object with background and border colors
 */
export const getPartnerStatusStyle = (status) => {
  switch (status) {
    case 'accepted':
      return {
        background: '#dcfce7', // Light green background
        border: '2px solid #16a34a' // Green border
      };
    case 'declined':
      return {
        background: '#fef2f2', // Light red background
        border: '2px solid #dc2626' // Red border
      };
    case 'pending':
    default:
      return {
        background: '#e0f2fe', // Light blue background
        border: '2px solid #0284c7' // Blue border
      };
  }
};

/**
 * Get the display text for partner status
 * @param {string} status - The partner invitation status
 * @returns {string} - Display text for the status
 */
export const getPartnerStatusText = (status) => {
  switch (status) {
    case 'accepted':
      return 'ACCEPTED';
    case 'declined':
      return 'DECLINED';
    case 'pending':
    default:
      return 'PENDING';
  }
};