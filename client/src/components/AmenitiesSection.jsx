import React from 'react';


const AmenitiesSection = (props) => {

  return (

    <div style={{
      marginLeft: '60px',
      borderBottom: '1px solid black'
    }}>
      {/* {console.log('Amenities', props.amenities)} */}
      <div style={{
        maxWidth: "1128px"
      }}>
        <div style={{
          borderTopColor: "rgb(221, 221, 221)"
        }}>
        </div>
        <div style={{
          paddingTop: "48px"
        }}>
          <div style={{
            color: '#222222',
            fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '20px'
          }}>
            <div style={{
              paddingBottom: "24px"
            }}>
              <div>
                <section>
                  <h2 tabIndex="-1" style={{
                    color: 'rgb(34, 34, 34)',
                    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
                    fontWeight: '600',
                    fontSize: '22px',
                    lineHeight: '26px'
                  }}>Amenities</h2>
                </section>
              </div>
            </div>
            <div style={{
              paddingBottom: '60px'
            }}>
              <div style={{
                paddingBottom: '20px'
              }}>
                <span>
                  <div style={{
                    display: 'inline-block',
                    paddingRight: '80px'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[0]}
                  </div>
                  <div style={{
                    display: 'inline-block'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[1]}
                  </div>
                </span>
              </div>

              <div style={{
                paddingBottom: '20px'
              }}>
                <span>
                  <div style={{
                    display: 'inline-block',
                    paddingRight: '80px'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[2]}
                  </div>
                  <div style={{
                    display: 'inline-block'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[3]}
                  </div>
                </span>
              </div>

              <div style={{
                paddingBottom: '20px'
              }}>
                <span>
                  <div style={{
                    display: 'inline-block',
                    paddingRight: '80px'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[4]}
                  </div>
                  <div style={{
                    display: 'inline-block'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[5]}
                  </div>
                </span>
              </div>

              <div style={{
                paddingBottom: '20px'
              }}>
                <span>
                  <div style={{
                    display: 'inline-block',
                    paddingRight: '80px'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[6]}
                  </div>
                  <div style={{
                    display: 'inline-block'
                  }}>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{
                      display: 'inline-block', height: '24px', width: '24px', fill: 'currentcolor', paddingRight: '16px'
                    }}>
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                      </path>
                    </svg>
                    {props.amenities[7]}
                  </div>
                </span>
              </div>

              <div style={{
                paddingTop: '40px'
              }}>
                <button style={{
                  borderRadius: '8px',
                  border: '1px solid black',
                  background: 'var(--linaria-theme_palette-white)',
                  padding: '13px 23px',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '20px',
                  outline: 'none'
                }}>Show all 40 amenities</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default AmenitiesSection;
