package com.example.backend.Commercial;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CommercialService {

    private final CommercialRepository commercialRepository;
}
