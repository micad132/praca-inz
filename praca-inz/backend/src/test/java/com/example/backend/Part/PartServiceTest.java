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

        PartModel partModel = PartModel.builder()
                .name("Kierownica")
                .price(250.0)
                .build();
        partService.addPart(partMapper.mapEntityToDTO(partModel));
    }

    @Test
    void deletePartShouldBeSuccessfulWhenThereIsPart() {

        PartModel partModel = new PartModel();
        partModel.setId(73L);
        partModel.setName("Zderzak");
        partModel.setPrice(250.0);
        when(partRepository.findById(partModel.getId())).thenReturn(Optional.of(partModel));
        partService.deletePart(partModel.getId());
    }

    @Test
    void updatePartShouldThrowExceptionWhenThereIsNoPart() {
        PartModel partModel = new PartModel();
        partModel.setId(73L);
        partModel.setName("Zderzak");
        partModel.setPrice(250.0);
        PartModel newPartModel = new PartModel();
        newPartModel.setId(132L);
        given(partRepository.findById(anyLong())).willReturn(Optional.ofNullable(null));
        PartModelDTO partModelDTO = PartModelDTO.builder()
                .partId(newPartModel.getId())
                .build();

        assertThrows(Exception.class, () -> {
            partService.updatePart(partModelDTO);
        });
    }

    @Test
    void getAllPartsDTO() {
//        List<UserModel> users = new ArrayList<>();
//        List<PartModelDTO> partsDTO = new ArrayList<>();
//        List<PartModel> parts = new ArrayList<>();
//        parts.add(new PartModel());
//        partsDTO.add(new PartModelDTO(1L,"Kierownica",250.0));
//        given(partRepository.findAll()).willReturn(parts);
//        partService.addPart(new PartModelDTO(1L, "Kierownica", 250.0));
//        List<PartModelDTO> expected =  partService.getAllParts();
//        given(partService.getAllParts()).willReturn(partsDTO);
//        assertEquals(expected, partsDTO);
        List mockedList = mock(List.class);
        mockedList.add(new PartModelDTO(1L,"kierownica", 250.0));
        mockedList.add(new PartModelDTO(2L,"opona", 320.0));
        List<PartModelDTO> partsDTO = new ArrayList<>();
        partsDTO.add(new PartModelDTO(1L,"Kierownica",250.0));
        partsDTO.add(new PartModelDTO(2L,"Kierownicafds",250.0));
        assertEquals(mockedList.size(),partsDTO.size());
    }
}