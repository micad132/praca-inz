package com.example.backend.User;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public void registerUser(UserModel userModel){
        userModel.setPassword(encoder.encode(userModel.getPassword()));
        userRepository.save(userModel);

    }

    public void updateUserDetails(UserDTO userDTO){
        UserModel newUserModel = new UserModel();
        Optional<UserModel> userModelToChange = Optional.of(userRepository.findById(userDTO.getId()).orElseThrow(() -> new UsernameNotFoundException("User not found")));
        newUserModel.setId(userModelToChange.get().getId());
        newUserModel.setName(userDTO.getName());
        newUserModel.setEmail(userModelToChange.get().getEmail());
        newUserModel.setPassword(userModelToChange.get().getPassword());
        newUserModel.setCityName(userDTO.getCityName());
        newUserModel.setPostalCode(userDTO.getPostalCode());
        newUserModel.setRole(userModelToChange.get().getRole());
        userRepository.save(newUserModel);

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

    public UserModel getUserById(Long id){
        return userRepository.findById(id).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }


}
