// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FVCOMPARE_METADATA: Metadata = {
    id: "84e27ef54cc73075db70cca3ebbdd40631c9472d.boutiques",
    name: "fvcompare",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FvcompareParameters {
    "__STYXTYPE__": "fvcompare";
    "subject1": string;
    "subject2": string;
    "subject_dir1"?: string | null | undefined;
    "subject_dir2"?: string | null | undefined;
    "name1"?: string | null | undefined;
    "name2"?: string | null | undefined;
    "color1"?: string | null | undefined;
    "volume"?: string | null | undefined;
    "segmentation"?: string | null | undefined;
    "aseg": boolean;
    "no_seg": boolean;
    "right_hemi": boolean;
    "no_surf": boolean;
    "gray_levels"?: Array<number> | null | undefined;
    "cursor_position"?: Array<number> | null | undefined;
    "zoom_level"?: number | null | undefined;
    "annotation"?: string | null | undefined;
    "aparc": boolean;
    "inflated": boolean;
    "white": boolean;
    "orig": boolean;
    "surf_name"?: string | null | undefined;
    "pointset"?: InputPathType | null | undefined;
    "wot2": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "fvcompare": fvcompare_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fvcompare(...)`.
 *
 * @interface
 */
interface FvcompareOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fvcompare_params(
    subject1: string,
    subject2: string,
    subject_dir1: string | null = null,
    subject_dir2: string | null = null,
    name1: string | null = null,
    name2: string | null = null,
    color1: string | null = null,
    volume: string | null = null,
    segmentation: string | null = null,
    aseg: boolean = false,
    no_seg: boolean = false,
    right_hemi: boolean = false,
    no_surf: boolean = false,
    gray_levels: Array<number> | null = null,
    cursor_position: Array<number> | null = null,
    zoom_level: number | null = null,
    annotation: string | null = null,
    aparc: boolean = false,
    inflated: boolean = false,
    white: boolean = false,
    orig: boolean = false,
    surf_name: string | null = null,
    pointset: InputPathType | null = null,
    wot2: boolean = false,
): FvcompareParameters {
    /**
     * Build parameters.
    
     * @param subject1 Subject 1 identifier
     * @param subject2 Subject 2 identifier
     * @param subject_dir1 Directory path for Subject 1
     * @param subject_dir2 Directory path for Subject 2
     * @param name1 Name associated with Subject 1 (default: s1)
     * @param name2 Name associated with Subject 2 (default: s2)
     * @param color1 Set surface colors for Subject 1
     * @param volume Volume name found in subject/mri (default: brainmask.mgz, can have multiple)
     * @param segmentation Segmentation name found in subject/mri (default: aparc+aseg.mgz, can have multiple)
     * @param aseg Add aseg.mgz to segmentation list
     * @param no_seg Do not display segmentations
     * @param right_hemi Only display right hemisphere
     * @param no_surf Do not display surfaces
     * @param gray_levels Set gray scale levels
     * @param cursor_position Place cursor at given location and center Field of View
     * @param zoom_level Set zoom level
     * @param annotation Load annotation onto surfaces
     * @param aparc Load aparc.annot onto surfaces
     * @param inflated Load inflated surfaces in addition to white and pial
     * @param white Only show white surfaces
     * @param orig Only show orig.nofix and orig surfaces
     * @param surf_name Only show specified surface name
     * @param pointset Load point set file
     * @param wot2 Include the ?h.woT2.pial surfs
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fvcompare" as const,
        "subject1": subject1,
        "subject2": subject2,
        "aseg": aseg,
        "no_seg": no_seg,
        "right_hemi": right_hemi,
        "no_surf": no_surf,
        "aparc": aparc,
        "inflated": inflated,
        "white": white,
        "orig": orig,
        "wot2": wot2,
    };
    if (subject_dir1 !== null) {
        params["subject_dir1"] = subject_dir1;
    }
    if (subject_dir2 !== null) {
        params["subject_dir2"] = subject_dir2;
    }
    if (name1 !== null) {
        params["name1"] = name1;
    }
    if (name2 !== null) {
        params["name2"] = name2;
    }
    if (color1 !== null) {
        params["color1"] = color1;
    }
    if (volume !== null) {
        params["volume"] = volume;
    }
    if (segmentation !== null) {
        params["segmentation"] = segmentation;
    }
    if (gray_levels !== null) {
        params["gray_levels"] = gray_levels;
    }
    if (cursor_position !== null) {
        params["cursor_position"] = cursor_position;
    }
    if (zoom_level !== null) {
        params["zoom_level"] = zoom_level;
    }
    if (annotation !== null) {
        params["annotation"] = annotation;
    }
    if (surf_name !== null) {
        params["surf_name"] = surf_name;
    }
    if (pointset !== null) {
        params["pointset"] = pointset;
    }
    return params;
}


function fvcompare_cargs(
    params: FvcompareParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fvcompare");
    cargs.push(
        "--s1",
        (params["subject1"] ?? null)
    );
    cargs.push(
        "--s2",
        (params["subject2"] ?? null)
    );
    if ((params["subject_dir1"] ?? null) !== null) {
        cargs.push(
            "--sd1",
            (params["subject_dir1"] ?? null)
        );
    }
    if ((params["subject_dir2"] ?? null) !== null) {
        cargs.push(
            "--sd2",
            (params["subject_dir2"] ?? null)
        );
    }
    if ((params["name1"] ?? null) !== null) {
        cargs.push(
            "--n1",
            (params["name1"] ?? null)
        );
    }
    if ((params["name2"] ?? null) !== null) {
        cargs.push(
            "--n2",
            (params["name2"] ?? null)
        );
    }
    if ((params["color1"] ?? null) !== null) {
        cargs.push(
            "--c1",
            (params["color1"] ?? null)
        );
    }
    if ((params["volume"] ?? null) !== null) {
        cargs.push(
            "--vol",
            (params["volume"] ?? null)
        );
    }
    if ((params["segmentation"] ?? null) !== null) {
        cargs.push(
            "--seg",
            (params["segmentation"] ?? null)
        );
    }
    if ((params["aseg"] ?? null)) {
        cargs.push("--aseg");
    }
    if ((params["no_seg"] ?? null)) {
        cargs.push("--no-seg");
    }
    if ((params["right_hemi"] ?? null)) {
        cargs.push("--rh");
    }
    if ((params["no_surf"] ?? null)) {
        cargs.push("--no-surf");
    }
    if ((params["gray_levels"] ?? null) !== null) {
        cargs.push(
            "--gray",
            ...(params["gray_levels"] ?? null).map(String)
        );
    }
    if ((params["cursor_position"] ?? null) !== null) {
        cargs.push(
            "--crs",
            ...(params["cursor_position"] ?? null).map(String)
        );
    }
    if ((params["zoom_level"] ?? null) !== null) {
        cargs.push(
            "--zoom",
            String((params["zoom_level"] ?? null))
        );
    }
    if ((params["annotation"] ?? null) !== null) {
        cargs.push(
            "--annot",
            (params["annotation"] ?? null)
        );
    }
    if ((params["aparc"] ?? null)) {
        cargs.push("--aparc");
    }
    if ((params["inflated"] ?? null)) {
        cargs.push("--inflated");
    }
    if ((params["white"] ?? null)) {
        cargs.push("--white");
    }
    if ((params["orig"] ?? null)) {
        cargs.push("--orig");
    }
    if ((params["surf_name"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf_name"] ?? null)
        );
    }
    if ((params["pointset"] ?? null) !== null) {
        cargs.push(
            "--p",
            execution.inputFile((params["pointset"] ?? null))
        );
    }
    if ((params["wot2"] ?? null)) {
        cargs.push("--wot2");
    }
    return cargs;
}


function fvcompare_outputs(
    params: FvcompareParameters,
    execution: Execution,
): FvcompareOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FvcompareOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fvcompare_execute(
    params: FvcompareParameters,
    execution: Execution,
): FvcompareOutputs {
    /**
     * Simultaneously loads volume, segmentation, and surface data from two subjects in freeview, for comparing across time or different analysis methods.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FvcompareOutputs`).
     */
    params = execution.params(params)
    const cargs = fvcompare_cargs(params, execution)
    const ret = fvcompare_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fvcompare(
    subject1: string,
    subject2: string,
    subject_dir1: string | null = null,
    subject_dir2: string | null = null,
    name1: string | null = null,
    name2: string | null = null,
    color1: string | null = null,
    volume: string | null = null,
    segmentation: string | null = null,
    aseg: boolean = false,
    no_seg: boolean = false,
    right_hemi: boolean = false,
    no_surf: boolean = false,
    gray_levels: Array<number> | null = null,
    cursor_position: Array<number> | null = null,
    zoom_level: number | null = null,
    annotation: string | null = null,
    aparc: boolean = false,
    inflated: boolean = false,
    white: boolean = false,
    orig: boolean = false,
    surf_name: string | null = null,
    pointset: InputPathType | null = null,
    wot2: boolean = false,
    runner: Runner | null = null,
): FvcompareOutputs {
    /**
     * Simultaneously loads volume, segmentation, and surface data from two subjects in freeview, for comparing across time or different analysis methods.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject1 Subject 1 identifier
     * @param subject2 Subject 2 identifier
     * @param subject_dir1 Directory path for Subject 1
     * @param subject_dir2 Directory path for Subject 2
     * @param name1 Name associated with Subject 1 (default: s1)
     * @param name2 Name associated with Subject 2 (default: s2)
     * @param color1 Set surface colors for Subject 1
     * @param volume Volume name found in subject/mri (default: brainmask.mgz, can have multiple)
     * @param segmentation Segmentation name found in subject/mri (default: aparc+aseg.mgz, can have multiple)
     * @param aseg Add aseg.mgz to segmentation list
     * @param no_seg Do not display segmentations
     * @param right_hemi Only display right hemisphere
     * @param no_surf Do not display surfaces
     * @param gray_levels Set gray scale levels
     * @param cursor_position Place cursor at given location and center Field of View
     * @param zoom_level Set zoom level
     * @param annotation Load annotation onto surfaces
     * @param aparc Load aparc.annot onto surfaces
     * @param inflated Load inflated surfaces in addition to white and pial
     * @param white Only show white surfaces
     * @param orig Only show orig.nofix and orig surfaces
     * @param surf_name Only show specified surface name
     * @param pointset Load point set file
     * @param wot2 Include the ?h.woT2.pial surfs
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FvcompareOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FVCOMPARE_METADATA);
    const params = fvcompare_params(subject1, subject2, subject_dir1, subject_dir2, name1, name2, color1, volume, segmentation, aseg, no_seg, right_hemi, no_surf, gray_levels, cursor_position, zoom_level, annotation, aparc, inflated, white, orig, surf_name, pointset, wot2)
    return fvcompare_execute(params, execution);
}


export {
      FVCOMPARE_METADATA,
      FvcompareOutputs,
      FvcompareParameters,
      fvcompare,
      fvcompare_params,
};
