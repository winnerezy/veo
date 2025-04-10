package com.winnerezy.Veo.dto;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import com.winnerezy.Veo.models.Option;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PollDTO {

    @NotBlank(message = "title cannot be blank")
    @Size(max = 40, message = "Maximum length of 40 characters")
    private String title;

    @NotNull(message = "ending cannot be null")
    @Future(message = "Ending must be in the future")
    private LocalDateTime ending;

    @NotEmpty(message = "options cannot be empty")
    private List<Option> options;

    public void setEnding(LocalDateTime ending){
        this.ending = ending.atZone(ZoneId.systemDefault()).toLocalDateTime();
    }
}
