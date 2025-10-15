import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

const PopupContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  z-index: 10;
  transition: none;
  padding: 0;
  line-height: 1;

  &:hover {
    background: white;
    color: #333;
    transition: none;
  }

  @media (max-width: 768px) {
    background: transparent;
    color: #333;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #333;
    }
  }
`;

const PopupHeader = styled.div`
  text-align: center;
  padding: 25px 20px 15px;
  background: linear-gradient(135deg, #1e7a6b 0%, #29ba9b 100%);
  color: white;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    color: white;
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 20px 15px 12px;
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;

const PopupContent = styled.div`
  padding: 20px;
  overflow: hidden;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ShirtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const ShirtCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: none;

  &:hover {
    border-color: #29ba9b;
    transition: none;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 6px;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 4px 0;
    text-align: center;
  }

  p {
    font-size: 0.7rem;
    color: #6b7280;
    margin: 0;
    text-align: center;
  }

  .price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .current-price {
    font-size: 0.7rem;
    color: #dc2626;
    font-weight: 600;
    margin: 0;
  }

  .original-price {
    font-size: 0.6rem;
    color: #9ca3af;
    text-decoration: line-through;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 8px;
    
    img {
      height: 100px;
    }
    
    h4 {
      font-size: 0.75rem;
    }
    
    p {
      font-size: 0.65rem;
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CTAText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #1e7a6b 0%, #29ba9b 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(30, 122, 107, 0.3);
  transition: none;

  &:hover {
    background: linear-gradient(135deg, #1a6b5e 0%, #238a73 100%);
    box-shadow: 0 4px 12px rgba(30, 122, 107, 0.4);
    transition: none;
  }
`;

const ShirtPopup = ({ isOpen, onClose }) => {
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const shirts = [
    {
      id: 1,
      name: "",
      price: "₱700",
      originalPrice: "",
      image: "/shirt.png"
    },
    {
      id: 2,
      name: "",
      price: "₱500",
      originalPrice: "₱699",
      image: "/shirt2.png"
    },
    {
      id: 3,
      name: "",
      price: "₱700",
      originalPrice: "₱899",
      image: "/shirt3.png"
    }
  ];

  // Check mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation for mobile carousel
  useEffect(() => {
    if (isOpen && isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shirts.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isOpen, isMobile, shirts.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShirtClick = (shirt) => {
    setSelectedShirt(shirt);
    // Here you could add logic to show more details or add to cart
  };

  // Get shirts to display for mobile carousel
  const getMobileShirts = () => {
    const displayShirts = [];
    for (let i = 0; i < 2; i++) {
      const shirtIndex = (currentIndex + i) % shirts.length;
      displayShirts.push(shirts[shirtIndex]);
    }
    return displayShirts;
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={handleOverlayClick}>
      <PopupContainer>
        <CloseButton onClick={onClose}>
          ×
        </CloseButton>
        
        <PopupHeader>
          <h2>Official PPL Merchandise</h2>
          <p>Show your Philippine Pickleball League pride!</p>
        </PopupHeader>

        <PopupContent>
          <ShirtGrid>
            {(isMobile ? getMobileShirts() : shirts).map((shirt) => (
              <ShirtCard 
                key={`${shirt.id}-${currentIndex}`} 
                onClick={() => handleShirtClick(shirt)}
                style={{
                  borderColor: selectedShirt?.id === shirt.id ? '#29ba9b' : 'transparent'
                }}
              >
                <img src={shirt.image} alt={shirt.name} draggable="false" />
                <h4>{shirt.name}</h4>
                <div className="price-container">
                  <p className="original-price">{shirt.originalPrice}</p>
                  <p className="current-price">{shirt.price}</p>
                </div>
              </ShirtCard>
            ))}
          </ShirtGrid>

          <CTASection>
            <CTAText>
              Get your official PPL merch and represent the league in style!
            </CTAText>
            <CTAButton onClick={() => {
              window.open('https://pplonlinestore.com/', '_blank');
            }}>
              Order Now
            </CTAButton>
          </CTASection>
        </PopupContent>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default ShirtPopup;