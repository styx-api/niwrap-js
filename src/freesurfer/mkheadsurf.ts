// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MKHEADSURF_METADATA: Metadata = {
    id: "d268c25e144e66d66d451c811baf8b76c969e6ec.boutiques",
    name: "mkheadsurf",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MkheadsurfParameters {
    "__STYXTYPE__": "mkheadsurf";
    "input_vol": InputPathType;
    "output_vol": string;
    "output_surf": string;
    "subject_id": string;
    "nsmooth"?: number | null | undefined;
    "noseghead": boolean;
    "thresh1"?: number | null | undefined;
    "thresh2"?: number | null | undefined;
    "nhitsmin"?: number | null | undefined;
    "ndilate"?: number | null | undefined;
    "nerode"?: number | null | undefined;
    "fillval"?: number | null | undefined;
    "fhi"?: number | null | undefined;
    "no_rescale": boolean;
    "no_fill_holes_islands": boolean;
    "or_mask"?: InputPathType | null | undefined;
    "tessellation_method"?: string | null | undefined;
    "inflate": boolean;
    "curv": boolean;
    "srcvol"?: string | null | undefined;
    "headvol"?: string | null | undefined;
    "headsurf"?: string | null | undefined;
    "smheadsurf"?: string | null | undefined;
    "hemi"?: string | null | undefined;
    "subjects_dir"?: string | null | undefined;
    "umask"?: number | null | undefined;
    "logfile"?: string | null | undefined;
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
        "mkheadsurf": mkheadsurf_cargs,
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
 * Output object returned when calling `mkheadsurf(...)`.
 *
 * @interface
 */
interface MkheadsurfOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mkheadsurf_params(
    input_vol: InputPathType,
    output_vol: string,
    output_surf: string,
    subject_id: string,
    nsmooth: number | null = null,
    noseghead: boolean = false,
    thresh1: number | null = null,
    thresh2: number | null = null,
    nhitsmin: number | null = null,
    ndilate: number | null = null,
    nerode: number | null = null,
    fillval: number | null = null,
    fhi: number | null = null,
    no_rescale: boolean = false,
    no_fill_holes_islands: boolean = false,
    or_mask: InputPathType | null = null,
    tessellation_method: string | null = null,
    inflate: boolean = false,
    curv: boolean = false,
    srcvol: string | null = null,
    headvol: string | null = null,
    headsurf: string | null = null,
    smheadsurf: string | null = null,
    hemi: string | null = null,
    subjects_dir: string | null = null,
    umask: number | null = null,
    logfile: string | null = null,
): MkheadsurfParameters {
    /**
     * Build parameters.
    
     * @param input_vol Input volume
     * @param output_vol Output volume
     * @param output_surf Output surface
     * @param subject_id Subject ID
     * @param nsmooth Number of smoothing iterations (default 10)
     * @param noseghead Do not segment the head, only tessellate and smooth existing
     * @param thresh1 Threshold 1 value (default 20)
     * @param thresh2 Threshold 2 value (default 20)
     * @param nhitsmin Minimum number of hits (default 2)
     * @param ndilate Number of dilations (default 0)
     * @param nerode Number of erosions (default 0)
     * @param fillval Fill value (default 1)
     * @param fhi FHI for MRIchangeType; default is to use default in mri_seghead
     * @param no_rescale Do not rescale input when converting to uchar
     * @param no_fill_holes_islands Do not fill holes and remove islands
     * @param or_mask Include all voxels in ormask in the head seg
     * @param tessellation_method Tessellation method using mri_tessellate or mri_mc (default is -mc)
     * @param inflate Inflate and compute sulc
     * @param curv Compute curv with smoothing
     * @param srcvol Source volume ID (default is T1)
     * @param headvol Head volume ID (default is seghead)
     * @param headsurf Head surface ID (default is seghead)
     * @param smheadsurf Smoothed head surface ID (default is smseghead)
     * @param hemi Hemisphere (default is lh)
     * @param subjects_dir Subjects directory (default is SUBJECTS_DIR)
     * @param umask Umask setting (default is 2)
     * @param logfile Log file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mkheadsurf" as const,
        "input_vol": input_vol,
        "output_vol": output_vol,
        "output_surf": output_surf,
        "subject_id": subject_id,
        "noseghead": noseghead,
        "no_rescale": no_rescale,
        "no_fill_holes_islands": no_fill_holes_islands,
        "inflate": inflate,
        "curv": curv,
    };
    if (nsmooth !== null) {
        params["nsmooth"] = nsmooth;
    }
    if (thresh1 !== null) {
        params["thresh1"] = thresh1;
    }
    if (thresh2 !== null) {
        params["thresh2"] = thresh2;
    }
    if (nhitsmin !== null) {
        params["nhitsmin"] = nhitsmin;
    }
    if (ndilate !== null) {
        params["ndilate"] = ndilate;
    }
    if (nerode !== null) {
        params["nerode"] = nerode;
    }
    if (fillval !== null) {
        params["fillval"] = fillval;
    }
    if (fhi !== null) {
        params["fhi"] = fhi;
    }
    if (or_mask !== null) {
        params["or_mask"] = or_mask;
    }
    if (tessellation_method !== null) {
        params["tessellation_method"] = tessellation_method;
    }
    if (srcvol !== null) {
        params["srcvol"] = srcvol;
    }
    if (headvol !== null) {
        params["headvol"] = headvol;
    }
    if (headsurf !== null) {
        params["headsurf"] = headsurf;
    }
    if (smheadsurf !== null) {
        params["smheadsurf"] = smheadsurf;
    }
    if (hemi !== null) {
        params["hemi"] = hemi;
    }
    if (subjects_dir !== null) {
        params["subjects_dir"] = subjects_dir;
    }
    if (umask !== null) {
        params["umask"] = umask;
    }
    if (logfile !== null) {
        params["logfile"] = logfile;
    }
    return params;
}


function mkheadsurf_cargs(
    params: MkheadsurfParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mkheadsurf");
    cargs.push(
        "-i",
        execution.inputFile((params["input_vol"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_vol"] ?? null)
    );
    cargs.push(
        "-surf",
        (params["output_surf"] ?? null)
    );
    cargs.push(
        "-s",
        (params["subject_id"] ?? null)
    );
    if ((params["nsmooth"] ?? null) !== null) {
        cargs.push(
            "-nsmooth",
            String((params["nsmooth"] ?? null))
        );
    }
    if ((params["noseghead"] ?? null)) {
        cargs.push("-noseghead");
    }
    if ((params["thresh1"] ?? null) !== null) {
        cargs.push(
            "-thresh1",
            String((params["thresh1"] ?? null))
        );
    }
    if ((params["thresh2"] ?? null) !== null) {
        cargs.push(
            "-thresh2",
            String((params["thresh2"] ?? null))
        );
    }
    if ((params["nhitsmin"] ?? null) !== null) {
        cargs.push(
            "-nhitsmin",
            String((params["nhitsmin"] ?? null))
        );
    }
    if ((params["ndilate"] ?? null) !== null) {
        cargs.push(
            "-ndilate",
            String((params["ndilate"] ?? null))
        );
    }
    if ((params["nerode"] ?? null) !== null) {
        cargs.push(
            "-nerode",
            String((params["nerode"] ?? null))
        );
    }
    if ((params["fillval"] ?? null) !== null) {
        cargs.push(
            "-fillval",
            String((params["fillval"] ?? null))
        );
    }
    if ((params["fhi"] ?? null) !== null) {
        cargs.push(
            "-fhi",
            String((params["fhi"] ?? null))
        );
    }
    if ((params["no_rescale"] ?? null)) {
        cargs.push("-no-rescale");
    }
    if ((params["no_fill_holes_islands"] ?? null)) {
        cargs.push("-no-fill-holes-islands");
    }
    if ((params["or_mask"] ?? null) !== null) {
        cargs.push(
            "-or-mask",
            execution.inputFile((params["or_mask"] ?? null))
        );
    }
    if ((params["tessellation_method"] ?? null) !== null) {
        cargs.push(
            "-tess",
            (params["tessellation_method"] ?? null)
        );
    }
    if ((params["inflate"] ?? null)) {
        cargs.push("-inflate");
    }
    if ((params["curv"] ?? null)) {
        cargs.push("-curv");
    }
    if ((params["srcvol"] ?? null) !== null) {
        cargs.push(
            "-srcvol",
            (params["srcvol"] ?? null)
        );
    }
    if ((params["headvol"] ?? null) !== null) {
        cargs.push(
            "-headvol",
            (params["headvol"] ?? null)
        );
    }
    if ((params["headsurf"] ?? null) !== null) {
        cargs.push(
            "-headsurf",
            (params["headsurf"] ?? null)
        );
    }
    if ((params["smheadsurf"] ?? null) !== null) {
        cargs.push(
            "-smheadsurf",
            (params["smheadsurf"] ?? null)
        );
    }
    if ((params["hemi"] ?? null) !== null) {
        cargs.push(
            "-hemi",
            (params["hemi"] ?? null)
        );
    }
    if ((params["subjects_dir"] ?? null) !== null) {
        cargs.push(
            "-sd",
            (params["subjects_dir"] ?? null)
        );
    }
    if ((params["umask"] ?? null) !== null) {
        cargs.push(
            "-umask",
            String((params["umask"] ?? null))
        );
    }
    if ((params["logfile"] ?? null) !== null) {
        cargs.push(
            "-log",
            (params["logfile"] ?? null)
        );
    }
    return cargs;
}


function mkheadsurf_outputs(
    params: MkheadsurfParameters,
    execution: Execution,
): MkheadsurfOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MkheadsurfOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mkheadsurf_execute(
    params: MkheadsurfParameters,
    execution: Execution,
): MkheadsurfOutputs {
    /**
     * Segment and create a surface representation of the head for visualization and further processing.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MkheadsurfOutputs`).
     */
    params = execution.params(params)
    const cargs = mkheadsurf_cargs(params, execution)
    const ret = mkheadsurf_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mkheadsurf(
    input_vol: InputPathType,
    output_vol: string,
    output_surf: string,
    subject_id: string,
    nsmooth: number | null = null,
    noseghead: boolean = false,
    thresh1: number | null = null,
    thresh2: number | null = null,
    nhitsmin: number | null = null,
    ndilate: number | null = null,
    nerode: number | null = null,
    fillval: number | null = null,
    fhi: number | null = null,
    no_rescale: boolean = false,
    no_fill_holes_islands: boolean = false,
    or_mask: InputPathType | null = null,
    tessellation_method: string | null = null,
    inflate: boolean = false,
    curv: boolean = false,
    srcvol: string | null = null,
    headvol: string | null = null,
    headsurf: string | null = null,
    smheadsurf: string | null = null,
    hemi: string | null = null,
    subjects_dir: string | null = null,
    umask: number | null = null,
    logfile: string | null = null,
    runner: Runner | null = null,
): MkheadsurfOutputs {
    /**
     * Segment and create a surface representation of the head for visualization and further processing.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_vol Input volume
     * @param output_vol Output volume
     * @param output_surf Output surface
     * @param subject_id Subject ID
     * @param nsmooth Number of smoothing iterations (default 10)
     * @param noseghead Do not segment the head, only tessellate and smooth existing
     * @param thresh1 Threshold 1 value (default 20)
     * @param thresh2 Threshold 2 value (default 20)
     * @param nhitsmin Minimum number of hits (default 2)
     * @param ndilate Number of dilations (default 0)
     * @param nerode Number of erosions (default 0)
     * @param fillval Fill value (default 1)
     * @param fhi FHI for MRIchangeType; default is to use default in mri_seghead
     * @param no_rescale Do not rescale input when converting to uchar
     * @param no_fill_holes_islands Do not fill holes and remove islands
     * @param or_mask Include all voxels in ormask in the head seg
     * @param tessellation_method Tessellation method using mri_tessellate or mri_mc (default is -mc)
     * @param inflate Inflate and compute sulc
     * @param curv Compute curv with smoothing
     * @param srcvol Source volume ID (default is T1)
     * @param headvol Head volume ID (default is seghead)
     * @param headsurf Head surface ID (default is seghead)
     * @param smheadsurf Smoothed head surface ID (default is smseghead)
     * @param hemi Hemisphere (default is lh)
     * @param subjects_dir Subjects directory (default is SUBJECTS_DIR)
     * @param umask Umask setting (default is 2)
     * @param logfile Log file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MkheadsurfOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MKHEADSURF_METADATA);
    const params = mkheadsurf_params(input_vol, output_vol, output_surf, subject_id, nsmooth, noseghead, thresh1, thresh2, nhitsmin, ndilate, nerode, fillval, fhi, no_rescale, no_fill_holes_islands, or_mask, tessellation_method, inflate, curv, srcvol, headvol, headsurf, smheadsurf, hemi, subjects_dir, umask, logfile)
    return mkheadsurf_execute(params, execution);
}


export {
      MKHEADSURF_METADATA,
      MkheadsurfOutputs,
      MkheadsurfParameters,
      mkheadsurf,
      mkheadsurf_params,
};
