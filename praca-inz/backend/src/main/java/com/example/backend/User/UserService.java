package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public void registerUser(UserModel userModel){
        userModel.setPassword(encoder.encode(userModel.getPassword()));
        userRepository.save(userModel);

    }

    public List<UserModel> getAllUsers(){
        return userRepository.findAll();
    }

    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserModelByEmail(username).map(UserWrapper::new).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public UserDTO convertUserToUserDTO(UserModel userModel){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(userModel.getId());
        userDTO.setName(userModel.getName());
        userDTO.setCityName(userModel.getCityName());
        userDTO.setPostalCode(userModel.getPostalCode());
        return userDTO;
    }


}
