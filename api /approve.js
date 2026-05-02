onReadyForServerApproval: async (paymentId) => {
    // This tells your hidden Manager to approve the payment instantly
    await fetch('/api/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId })
    });
    console.log("Server approved the payment ID:", paymentId);
},
  
