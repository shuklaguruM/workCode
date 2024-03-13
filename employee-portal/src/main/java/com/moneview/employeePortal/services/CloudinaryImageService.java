package com.moneview.employeePortal.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
@Service
public interface CloudinaryImageService {

    public Map upload(MultipartFile file, Long empId);

}
