package com.Tanay.ContentManagementSystem.models;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User_Projects")

public class fetch_projects{
private String PROJ_ID;
private String PROJ_NAME;
private String PERMISSIONS[];
private String URL;
private String PAGE_TITLES[];
private String DESIGN_THEMES[];
private String COLORS[];
private String FONTS[];
private int PAGE_COUNT;
private String DATE_CREATED;

public fetch_projects(){

}

@Override
public String toString() {
	return "fetch_projects [PROJ_ID=" + PROJ_ID + ", PROJ_NAME=" + PROJ_NAME + ", PERMISSIONS="
			+ Arrays.toString(PERMISSIONS) + ", URL=" + URL + ", PAGE_TITLES=" + Arrays.toString(PAGE_TITLES)
			+ ", DESIGN_THEMES=" + Arrays.toString(DESIGN_THEMES) + ", COLORS=" + Arrays.toString(COLORS) + ", FONTS="
			+ Arrays.toString(FONTS) + ", PAGE_COUNT=" + PAGE_COUNT + ", DATE_CREATED=" + DATE_CREATED + "]";
}

public String getPROJ_ID() {
	return PROJ_ID;
}

public void setPROJ_ID(String pROJ_ID) {
	PROJ_ID = pROJ_ID;
}

public String getPROJ_NAME() {
	return PROJ_NAME;
}

public void setPROJ_NAME(String pROJ_NAME) {
	PROJ_NAME = pROJ_NAME;
}

public String[] getPERMISSIONS() {
	return PERMISSIONS;
}

public void setPERMISSIONS(String[] pERMISSIONS) {
	PERMISSIONS = pERMISSIONS;
}

public String getURL() {
	return URL;
}

public void setURL(String uRL) {
	URL = uRL;
}

public String[] getPAGE_TITLES() {
	return PAGE_TITLES;
}

public void setPAGE_TITLES(String[] pAGE_TITLES) {
	PAGE_TITLES = pAGE_TITLES;
}

public String[] getDESIGN_THEMES() {
	return DESIGN_THEMES;
}

public void setDESIGN_THEMES(String[] dESIGN_THEMES) {
	DESIGN_THEMES = dESIGN_THEMES;
}

public String[] getCOLORS() {
	return COLORS;
}

public void setCOLORS(String[] cOLORS) {
	COLORS = cOLORS;
}

public String[] getFONTS() {
	return FONTS;
}

public void setFONTS(String[] fONTS) {
	FONTS = fONTS;
}

public int getPAGE_COUNT() {
	return PAGE_COUNT;
}

public void setPAGE_COUNT(int pAGE_COUNT) {
	PAGE_COUNT = pAGE_COUNT;
}

public String getDATE_CREATED() {
	return DATE_CREATED;
}

public void setDATE_CREATED(String dATE_CREATED) {
	DATE_CREATED = dATE_CREATED;
}

}

