package com.example.backend.Part;

import com.example.backend.User.UserModel;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.mockito.BDDMockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PartServiceTest {


    @Autowired
    private PartService partService;

    @MockBean
    private PartRepository partRepository;

    @MockBean
    private PartMapper partMapper;

    @Test
    void addPart() {

        PartModelDTO partModel = PartModelDTO.builder()
                .partName("Kierownica")
                .partPrice(250.0)
                .build();
        partService.addPart(partModel);
        verify(partRepository,times(1)).save(partMapper.mapDTOToEntity(partModel));
    }

    @Test
    void deletePartShouldBeSuccessfulWhenThereIsPart() {

        PartModel partModel = new PartModel();
        partModel.setId(73L);
        when(partRepository.findById(partModel.getId())).thenReturn(Optional.of(partModel));
        partService.deletePart(partModel.getId());
    }

    @Test
    void updatePartShouldThrowExceptionWhenThereIsNoPart() {

        given(partRepository.findById(anyLong())).willReturn(Optional.ofNullable(null));
        PartModelDTO partModelDTO = PartModelDTO.builder()
                .partId(173L)
                .build();

        assertThrows(Exception.class, () -> {
            partService.updatePart(partModelDTO);
        });
    }

}