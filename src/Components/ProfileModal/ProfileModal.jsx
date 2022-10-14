    import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
          overlayBlur={3}
          opened={modalOpened}
          size='55%'
          onClose ={()=>setModalOpened(false)}
    >
      
          <form action="" className="infoForm">
              <div>
                  <input type="text" name='firstname' placeholder='first name' className="infoInput" />
              <input type="text" name='lastname' placeholder='Last name' className="infoInput" />
              </div>

              <div>
                  <input type="text" placeholder='Works At ' name='worksAt' className="infoInput" />
              </div>

              <div>
                <input type="text" name='livesIn' placeholder='LivesIn' className="infoInput" />
              <input type="text" name='country' placeholder='Country' className="infoInput" />    
              </div>

              <div>
                  <input type="text" placeholder='RelationShip status' className="infoInput" />
              </div>

              <div>
                  Profile Image
                  <input type="file" name="profileImage" id="" className="" />
                  Cover Image
                  <input type="file" name="coverImage" id="" className="" />
              </div>

              <button className="button infoButton">Update</button>
          </form>
          
    </Modal>
  );
}

export default ProfileModal;