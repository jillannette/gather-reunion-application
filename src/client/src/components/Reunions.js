import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../App.css';
 
const Reunions = () => {
  
  return (
    <>
      <div className='join-background'>
    <div className='reunions'>
      <br></br>
      <div style={{float: 'right'}}>
    <Button className='button' variant='light' size='lg' >Add Reunion Photos</Button>
    </div>
    <div>
    <h1 className="center-headline">Reunions</h1>
    </div>


   
    <div>
      <br></br>
      <br></br>
    
    <Container>
    <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaW2mydKKiF0-MjsgT8jl3_Pne9oI-F1FtnylAoog_n4zWVDNqWa_V2JVfnEW2USCHM3B7zVfG8T4bCmZkKarbq8cKorQtOZ8Nt1NdN_IOH0CxGX-pE2VecfJVf4qJRDIBD8AhoJ4b1ysfw4xMtJVvm4r_QAeqFftokTFzfZYyRVURfpgp6s1FFQjabwCawrhlbHLtOfNdY9j2cZqcWdwShBsaj0BrkSVEHpwx6JlHkgaTJg7uR5hNy32_kJ7ZE2OInL29KpQEXYYppMN5faMcd-lWZWedyEgOux1XisNmazzSzI4Uy0sEs82jADLkYB4EPNh1cmKztWRqeYVzO7A4eDiniQc5jKl41WWeRMgz3uDeP9O-Z9XD2qv72eE1R1a8IbTS5qPTm1BxCrVsQS8T3AQmqWCvNqqjwPwi_lzhuT0YaJZPou9hZtcB01yyZmPxpS2eKW2BWGqQeut3f3sUJJIZ0TTqD_VzjuvcxWLpQuwHKRkABhjhxDn4poQK5-cqmNIDbKXTO67weu35ktGd8Dz4tu5AQQGukYDssQtW4VTggO7Qm_X6PnrWCAFBRhwSGPQJu3_RZlTMZ3slJ0Vmav8KExK4sNa0-HwpBWqSdUVmad4a9VkZMQDh683B9um9zxuYR8bbOERY74QuqElWPcSw4LM59B7h4JoapPJEX0TfwTIH4DYqYvwwNT9idH3Kr86VG3av7RhuYljTZZX3_oppfoWhncpGRTm1NETWynaGsxZMbD6yto-JucMJHtgAM1AMvatfq674EWN2IIqIAGR-1TXp4QOqt1wJ9Vz-3XCo0TTzkJeNlEqUcgXVGDAwksqA2dzSb6Eeuxqx1Q134YMcf0W5QdCDXpsGGbs7JnzrynguJ1KYibPmLhyk-FGs5UJ1omUodLvJt7L5-GmDWXk-FNbWC_SfnLKlFEK7JZMEfZwKnDyn4VnPU=w1139-h854-s-no?authuser=0/100px180" />
      <Card.Body>
        <Card.Title>2026</Card.Title>
        <Card.Text>
         Our next reunion will be June 2026 in Greeley.  This reunion's host committee will be: Wendy Rich-Goldschmidt, Beth Weltner, and Jill Arnold
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/LCWLB1G49IArx8nWZQJemwlOJSfgpy0aSZIivifrIBIZdnIcnvhxGUmJXpzVFE3mYXaz6CNwPV7f7ckOetaiLjkaHxhVbhKPYF4qKJ8iLA8odCzr4cqp2QET4oFu-0d7jXWrQXpcBunIK8NKEkkCtlgZIEHIlAKQBAel9ibj1LdL6omhLky3Wn0WmrvHpGcyK2-RFpU_hRIBWvoqsEKStxeZDPLLvbXmNIAstBzMUdWW6z2bbbojbf-P20rsIVh4g6qq6MEBEU3ZKoQXJ2kJrLayr3Gv3C3_sp2W5zADOJNfD-WPwmapFvD8u_VGehfOs47ci9XOTTAHYwokVO_s6ioJEqsm1SQDYPfvpoqTwGsiaL7sjnt9Joo5qFQNJhjTChc0LeCdPT3Jc_zLoqIOUREBHu-9edcj3deIXpBapnxd2bKKqOHcvUPM4hXLj23JJ1Gt95Crc7sj606TnrOufNymaEDeNAgXv2JF3qL2f-_VJlNlDKGHpZXIT4fy0zGSvmytcNigVWykZ1M6qBnt5RDkV7t6YMD3NDml7-FWVknWEbUdwAGFT8fBJGBbopVHgyTgkeUV_5n4pJ2heVzPXGQxyMPlCBCQnVBRVXzYMNKq4BqiUQiGJUvnjNjRhYpKjo5mG9-JLwAuLzauH4IRAxodLH7al_dOZDcDzDD1dduzxWeWHHLNoQubWbx-OMTqQXOpQKzGYUq1Ymw055osLzuMwBMdnHsP4fqMIpBvmd-49H9-ke06LhYHLBFKEezX4HxbUFYo_9iSuroIEnL9b7dl6Vs9hMF68M_FAz0_ag1DtiA2oH8a_GuYCMoWNW0agRv19Jon2iTK1GTIUhtBMKDRWaQgsQ1R2VqTf54buUckBmSxBOnbGiPb2VY7WuMGEO_oHatANhkn8zscvqejRDkAgyZPQvkshb9v0yPkzuEw4HHHZOovG7Mu1jnIlXeMLRNT5Jliou3ioQjcH18=w1139-h854-s-no?authuser=100px180" />
      <Card.Body>
        <Card.Title>2021</Card.Title>
        <Card.Text maxlength='150'>
        Our 40th!  FAC at The Goat, Golfing, Banquet at Kenny's
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 2021 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaWseSYERl0ymwCRon8UFBnh4NRMhzwEdhluXHyEZxRNUeDvhcwJvAFNwPKGZQsLaQY7DbkZxnkdsZX7chSdjjB-IOmS8SLYuPAfuzUntQNWxwT2KwVuIqYIdC1eSzImA-_9zkVNf0SSP3zB2cv5AsekThvYV4y87MRXCLeM_AApFLO5VPbxibjF32w1jsgXW41ITKr97yicXeflZsIPigM_0-FQz61P_sDFscx_MBYAlOjYeIFJRyQdXRAcoUbwKRnRL9wqzJSDbHe6Wg01VFr15Tp7iSeXVTfJgd2PzK1mtMMVOPwJJxWPeA257UbbL4yRvt_0uUcN4WRSR897OF-poxV4_pyEQCVOXhdvzUZxLriW-_LM6NMYReGDKQ6Xk6n-QOo0XxG-B8Mx_rrzOMG9tiNMgWPn9vGtG1tx9JNsJ0lakGnm6X80oFl0HXzHpJDh1_FdhlFDv8H_K63bSi2Lu62uJgjrTrzeRHGCfm4o3nDkmWEYtmn5SpzbeouDmPntMNu1ApFeOaEn5g9xahPuG_5Rg6yLfdBW1YvribHPMNiES6dnmNq-3WbIpdxC5Q_H9DpWG_n72b2EP-J3XpViiR87YiHC7oTPVHeO109m8hvBX2vspntz8G8JX6v3mfDT21yQYwReUwYOvRjPDEqHb5TiI7BDpq7MiIpnIelKeBkOGfssSo3aTC99XWyiyCXIU4We7mDtjmvm5YuNAyDyZXeznl7N4qOzAhevi2_0dHUJC1_qU30vMf_FQ0EVnjy1oM5vxHuSxNOXS0c0F1BlIYoCSnoJFBAeTT9OKDE-Q3cCBwzxk6fozl2oMgELMjXuNwOv96BzNriCll4C37_5FieTTSf1C6iDvfsMVhYqijvI5G0XfKVFdMr7AeRd76rLydBzb6MoSaH3W-scJrqGGI9VJBRXrZhjU1dqRIOcgjwSsSHl6CxVtD8=w960-h540-s-no?authuser=0/100px180" />
      <Card.Body>
        <Card.Title>2016</Card.Title>
        <Card.Text>
        FAC at Kenny's, All-day reunion party hosted by Art Guttersen, complete with boating, water slides and fireworks!  
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 2016 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <br></br>
    <br></br>
    <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaW2mydKKiF0-MjsgT8jl3_Pne9oI-F1FtnylAoog_n4zWVDNqWa_V2JVfnEW2USCHM3B7zVfG8T4bCmZkKarbq8cKorQtOZ8Nt1NdN_IOH0CxGX-pE2VecfJVf4qJRDIBD8AhoJ4b1ysfw4xMtJVvm4r_QAeqFftokTFzfZYyRVURfpgp6s1FFQjabwCawrhlbHLtOfNdY9j2cZqcWdwShBsaj0BrkSVEHpwx6JlHkgaTJg7uR5hNy32_kJ7ZE2OInL29KpQEXYYppMN5faMcd-lWZWedyEgOux1XisNmazzSzI4Uy0sEs82jADLkYB4EPNh1cmKztWRqeYVzO7A4eDiniQc5jKl41WWeRMgz3uDeP9O-Z9XD2qv72eE1R1a8IbTS5qPTm1BxCrVsQS8T3AQmqWCvNqqjwPwi_lzhuT0YaJZPou9hZtcB01yyZmPxpS2eKW2BWGqQeut3f3sUJJIZ0TTqD_VzjuvcxWLpQuwHKRkABhjhxDn4poQK5-cqmNIDbKXTO67weu35ktGd8Dz4tu5AQQGukYDssQtW4VTggO7Qm_X6PnrWCAFBRhwSGPQJu3_RZlTMZ3slJ0Vmav8KExK4sNa0-HwpBWqSdUVmad4a9VkZMQDh683B9um9zxuYR8bbOERY74QuqElWPcSw4LM59B7h4JoapPJEX0TfwTIH4DYqYvwwNT9idH3Kr86VG3av7RhuYljTZZX3_oppfoWhncpGRTm1NETWynaGsxZMbD6yto-JucMJHtgAM1AMvatfq674EWN2IIqIAGR-1TXp4QOqt1wJ9Vz-3XCo0TTzkJeNlEqUcgXVGDAwksqA2dzSb6Eeuxqx1Q134YMcf0W5QdCDXpsGGbs7JnzrynguJ1KYibPmLhyk-FGs5UJ1omUodLvJt7L5-GmDWXk-FNbWC_SfnLKlFEK7JZMEfZwKnDyn4VnPU=w1139-h854-s-no?authuser=0/100px180" />
      <Card.Body>
        <Card.Title>2011</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 2011 Gallery</Button>
        
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/LCWLB1G49IArx8nWZQJemwlOJSfgpy0aSZIivifrIBIZdnIcnvhxGUmJXpzVFE3mYXaz6CNwPV7f7ckOetaiLjkaHxhVbhKPYF4qKJ8iLA8odCzr4cqp2QET4oFu-0d7jXWrQXpcBunIK8NKEkkCtlgZIEHIlAKQBAel9ibj1LdL6omhLky3Wn0WmrvHpGcyK2-RFpU_hRIBWvoqsEKStxeZDPLLvbXmNIAstBzMUdWW6z2bbbojbf-P20rsIVh4g6qq6MEBEU3ZKoQXJ2kJrLayr3Gv3C3_sp2W5zADOJNfD-WPwmapFvD8u_VGehfOs47ci9XOTTAHYwokVO_s6ioJEqsm1SQDYPfvpoqTwGsiaL7sjnt9Joo5qFQNJhjTChc0LeCdPT3Jc_zLoqIOUREBHu-9edcj3deIXpBapnxd2bKKqOHcvUPM4hXLj23JJ1Gt95Crc7sj606TnrOufNymaEDeNAgXv2JF3qL2f-_VJlNlDKGHpZXIT4fy0zGSvmytcNigVWykZ1M6qBnt5RDkV7t6YMD3NDml7-FWVknWEbUdwAGFT8fBJGBbopVHgyTgkeUV_5n4pJ2heVzPXGQxyMPlCBCQnVBRVXzYMNKq4BqiUQiGJUvnjNjRhYpKjo5mG9-JLwAuLzauH4IRAxodLH7al_dOZDcDzDD1dduzxWeWHHLNoQubWbx-OMTqQXOpQKzGYUq1Ymw055osLzuMwBMdnHsP4fqMIpBvmd-49H9-ke06LhYHLBFKEezX4HxbUFYo_9iSuroIEnL9b7dl6Vs9hMF68M_FAz0_ag1DtiA2oH8a_GuYCMoWNW0agRv19Jon2iTK1GTIUhtBMKDRWaQgsQ1R2VqTf54buUckBmSxBOnbGiPb2VY7WuMGEO_oHatANhkn8zscvqejRDkAgyZPQvkshb9v0yPkzuEw4HHHZOovG7Mu1jnIlXeMLRNT5Jliou3ioQjcH18=w1139-h854-s-no?authuser=100px180" />
      <Card.Body>
        <Card.Title>2006</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 2006 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/4YWOX8Y5Y0oA16sc1wmqtuxVVuZm4j3gGqbyiTR50voLuUQO0FMsb_fkDVQtryCI1_TkZVlEmW8Dchj25VRiz2Zvwf4wCHICfoPQpQLregzORl1s5FoA8KE68xwp_Ahj8LXi9Wnrj8Jl_NS77bwBvgauxWFu3-zwSs_EuGjJ0qJJPUWa5GI-4b55q5-_nIcHq2YzLodrg6ZAEIi5-lsnww9M_Jir90ixCDw2-iyJBQKVo5AZIEbAgOhBH5XEeFTnfYyfIiHCh09Uuz1TtMbLzLC-LX8OVWE9fCznuvudruMF9QJcYOJgjeJcSnQV2m_omkKq3jycqkZC6wtr3CgIa-MVCKzAkODhTDqPFR90TEv_G5pJfnL9jipJdoIDrhDhnsf4aJCPbtAolpiYCEZeWrwrHNqP0zz6Yuuj2A-1FVdxvca7Q6wMmcTCCd8SOkVgV_fOG-KF0kHNv4hF1IF87CoEOqQxucC63Xwl6EWnWhUuWOQhgP8wal9rdqMpqB5ufZN6zUidCyVBk_7iwUcsSUqTrNLThAXNgtp0pdncsBYVdaLWsZVZS9_yBM0IrlZvQ0eyNzw1e-4IhF3wapf8bggst9ni73gzeGmrE5ll13Cphu7mYKZgVmin9AdkBnEAgf_uLxkzxUOY-VHkF_60bDGhEzOD0ToP9SJkZd7vcaPk2jYohF72cwhWZ5BGA-PGQ8p62DXHXBD8md1r620ahyEJ7WK4epJQxTMRCNFBwOd5MAk095n01ANRgniuEuYbnczHJckDcWgVGMQ5P56pE_gG2aeaAzfIK8m6x-vBovDXVgcOPe9JfQ-FMZGEBw9aAfy4zkFs3hAwbycD0EzhbFktora0Amdep3kKdPLP8thfmI0HTtP5A8CsRSrOXTv5l4eFOrgpAOZNKPi-Rlg66Hd0YRBDhk7HJ9vx-e6NjTv0q7wyHD78Y4fk2tHx60Oitb768-sEj2VASW8VEw=w960-h638-s-no?authuser=1/100px180" />
      <Card.Body>
        <Card.Title>2001</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 2001 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <br></br>
    <br></br>
    <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaW2mydKKiF0-MjsgT8jl3_Pne9oI-F1FtnylAoog_n4zWVDNqWa_V2JVfnEW2USCHM3B7zVfG8T4bCmZkKarbq8cKorQtOZ8Nt1NdN_IOH0CxGX-pE2VecfJVf4qJRDIBD8AhoJ4b1ysfw4xMtJVvm4r_QAeqFftokTFzfZYyRVURfpgp6s1FFQjabwCawrhlbHLtOfNdY9j2cZqcWdwShBsaj0BrkSVEHpwx6JlHkgaTJg7uR5hNy32_kJ7ZE2OInL29KpQEXYYppMN5faMcd-lWZWedyEgOux1XisNmazzSzI4Uy0sEs82jADLkYB4EPNh1cmKztWRqeYVzO7A4eDiniQc5jKl41WWeRMgz3uDeP9O-Z9XD2qv72eE1R1a8IbTS5qPTm1BxCrVsQS8T3AQmqWCvNqqjwPwi_lzhuT0YaJZPou9hZtcB01yyZmPxpS2eKW2BWGqQeut3f3sUJJIZ0TTqD_VzjuvcxWLpQuwHKRkABhjhxDn4poQK5-cqmNIDbKXTO67weu35ktGd8Dz4tu5AQQGukYDssQtW4VTggO7Qm_X6PnrWCAFBRhwSGPQJu3_RZlTMZ3slJ0Vmav8KExK4sNa0-HwpBWqSdUVmad4a9VkZMQDh683B9um9zxuYR8bbOERY74QuqElWPcSw4LM59B7h4JoapPJEX0TfwTIH4DYqYvwwNT9idH3Kr86VG3av7RhuYljTZZX3_oppfoWhncpGRTm1NETWynaGsxZMbD6yto-JucMJHtgAM1AMvatfq674EWN2IIqIAGR-1TXp4QOqt1wJ9Vz-3XCo0TTzkJeNlEqUcgXVGDAwksqA2dzSb6Eeuxqx1Q134YMcf0W5QdCDXpsGGbs7JnzrynguJ1KYibPmLhyk-FGs5UJ1omUodLvJt7L5-GmDWXk-FNbWC_SfnLKlFEK7JZMEfZwKnDyn4VnPU=w1139-h854-s-no?authuser=0/100px180" />
      <Card.Body>
        <Card.Title>1996</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 1996 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/LCWLB1G49IArx8nWZQJemwlOJSfgpy0aSZIivifrIBIZdnIcnvhxGUmJXpzVFE3mYXaz6CNwPV7f7ckOetaiLjkaHxhVbhKPYF4qKJ8iLA8odCzr4cqp2QET4oFu-0d7jXWrQXpcBunIK8NKEkkCtlgZIEHIlAKQBAel9ibj1LdL6omhLky3Wn0WmrvHpGcyK2-RFpU_hRIBWvoqsEKStxeZDPLLvbXmNIAstBzMUdWW6z2bbbojbf-P20rsIVh4g6qq6MEBEU3ZKoQXJ2kJrLayr3Gv3C3_sp2W5zADOJNfD-WPwmapFvD8u_VGehfOs47ci9XOTTAHYwokVO_s6ioJEqsm1SQDYPfvpoqTwGsiaL7sjnt9Joo5qFQNJhjTChc0LeCdPT3Jc_zLoqIOUREBHu-9edcj3deIXpBapnxd2bKKqOHcvUPM4hXLj23JJ1Gt95Crc7sj606TnrOufNymaEDeNAgXv2JF3qL2f-_VJlNlDKGHpZXIT4fy0zGSvmytcNigVWykZ1M6qBnt5RDkV7t6YMD3NDml7-FWVknWEbUdwAGFT8fBJGBbopVHgyTgkeUV_5n4pJ2heVzPXGQxyMPlCBCQnVBRVXzYMNKq4BqiUQiGJUvnjNjRhYpKjo5mG9-JLwAuLzauH4IRAxodLH7al_dOZDcDzDD1dduzxWeWHHLNoQubWbx-OMTqQXOpQKzGYUq1Ymw055osLzuMwBMdnHsP4fqMIpBvmd-49H9-ke06LhYHLBFKEezX4HxbUFYo_9iSuroIEnL9b7dl6Vs9hMF68M_FAz0_ag1DtiA2oH8a_GuYCMoWNW0agRv19Jon2iTK1GTIUhtBMKDRWaQgsQ1R2VqTf54buUckBmSxBOnbGiPb2VY7WuMGEO_oHatANhkn8zscvqejRDkAgyZPQvkshb9v0yPkzuEw4HHHZOovG7Mu1jnIlXeMLRNT5Jliou3ioQjcH18=w1139-h854-s-no?authuser=100px180" />
      <Card.Body>
        <Card.Title>1991</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 1991 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/4YWOX8Y5Y0oA16sc1wmqtuxVVuZm4j3gGqbyiTR50voLuUQO0FMsb_fkDVQtryCI1_TkZVlEmW8Dchj25VRiz2Zvwf4wCHICfoPQpQLregzORl1s5FoA8KE68xwp_Ahj8LXi9Wnrj8Jl_NS77bwBvgauxWFu3-zwSs_EuGjJ0qJJPUWa5GI-4b55q5-_nIcHq2YzLodrg6ZAEIi5-lsnww9M_Jir90ixCDw2-iyJBQKVo5AZIEbAgOhBH5XEeFTnfYyfIiHCh09Uuz1TtMbLzLC-LX8OVWE9fCznuvudruMF9QJcYOJgjeJcSnQV2m_omkKq3jycqkZC6wtr3CgIa-MVCKzAkODhTDqPFR90TEv_G5pJfnL9jipJdoIDrhDhnsf4aJCPbtAolpiYCEZeWrwrHNqP0zz6Yuuj2A-1FVdxvca7Q6wMmcTCCd8SOkVgV_fOG-KF0kHNv4hF1IF87CoEOqQxucC63Xwl6EWnWhUuWOQhgP8wal9rdqMpqB5ufZN6zUidCyVBk_7iwUcsSUqTrNLThAXNgtp0pdncsBYVdaLWsZVZS9_yBM0IrlZvQ0eyNzw1e-4IhF3wapf8bggst9ni73gzeGmrE5ll13Cphu7mYKZgVmin9AdkBnEAgf_uLxkzxUOY-VHkF_60bDGhEzOD0ToP9SJkZd7vcaPk2jYohF72cwhWZ5BGA-PGQ8p62DXHXBD8md1r620ahyEJ7WK4epJQxTMRCNFBwOd5MAk095n01ANRgniuEuYbnczHJckDcWgVGMQ5P56pE_gG2aeaAzfIK8m6x-vBovDXVgcOPe9JfQ-FMZGEBw9aAfy4zkFs3hAwbycD0EzhbFktora0Amdep3kKdPLP8thfmI0HTtP5A8CsRSrOXTv5l4eFOrgpAOZNKPi-Rlg66Hd0YRBDhk7HJ9vx-e6NjTv0q7wyHD78Y4fk2tHx60Oitb768-sEj2VASW8VEw=w960-h638-s-no?authuser=1/100px180" />
      <Card.Body>
        <Card.Title>1986</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View 1986 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    <br></br>
    <br></br>
    <Row>
    <Col xs={6} md={4}>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://www.facebook.com/photo/?fbid=10152433880592956&set=p.10152433880592956/100px180" />
      <Card.Body>
        <Card.Title>School Days</Card.Title>
        <Card.Text>
        Memories of our time in school together 
        </Card.Text>
        <Button variant="warning" href="reunionsPhotoGallery">View K-12 Gallery</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
    </div>



    </>
  );
};
  
export default Reunions;