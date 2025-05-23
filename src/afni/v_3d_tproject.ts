// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TPROJECT_METADATA: Metadata = {
    id: "f0bb8b9be73d7fb85ec362ec946cfdb828647c25.boutiques",
    name: "3dTproject",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTprojectParameters {
    "__STYXTYPE__": "3dTproject";
    "TR"?: number | null | undefined;
    "automask": boolean;
    "bandpass"?: Array<number> | null | undefined;
    "blur"?: number | null | undefined;
    "cenmode"?: "kill" | "zero" | "ntrp" | null | undefined;
    "censor"?: InputPathType | null | undefined;
    "censortr"?: Array<string> | null | undefined;
    "concat"?: InputPathType | null | undefined;
    "dsort"?: Array<InputPathType> | null | undefined;
    "in_file": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "noblock": boolean;
    "norm": boolean;
    "ort"?: InputPathType | null | undefined;
    "polort"?: number | null | undefined;
    "stopband"?: Array<number> | null | undefined;
    "prefix": string;
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
        "3dTproject": v_3d_tproject_cargs,
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
        "3dTproject": v_3d_tproject_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_tproject(...)`.
 *
 * @interface
 */
interface V3dTprojectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file.
     */
    out_file: OutputPathType;
}


function v_3d_tproject_params(
    in_file: InputPathType,
    prefix: string,
    tr: number | null = null,
    automask: boolean = false,
    bandpass: Array<number> | null = null,
    blur: number | null = null,
    cenmode: "kill" | "zero" | "ntrp" | null = null,
    censor: InputPathType | null = null,
    censortr: Array<string> | null = null,
    concat: InputPathType | null = null,
    dsort: Array<InputPathType> | null = null,
    mask: InputPathType | null = null,
    noblock: boolean = false,
    norm: boolean = false,
    ort: InputPathType | null = null,
    polort: number | null = null,
    stopband: Array<number> | null = null,
): V3dTprojectParameters {
    /**
     * Build parameters.
    
     * @param in_file Input file to 3dtproject.
     * @param prefix Output file prefix.
     * @param tr Use time step dd for the frequency calculations,rather than the value stored in the dataset header.
     * @param automask Generate a mask automatically.
     * @param bandpass (a float, a float). Remove all frequencies except those in the range.
     * @param blur Blur (inside the mask only) with a filter that haswidth (fwhm) of fff millimeters.spatial blurring (if done) is after the timeseries filtering.
     * @param cenmode 'kill' or 'zero' or 'ntrp'. Specifies how censored time points are treated in the output dataset:* mode = zero -- put zero values in their place; output dataset is same length as input* mode = kill -- remove those time points;  output dataset is shorter than input* mode = ntrp -- censored values are replaced by interpolated  neighboring (in time) non-censored values,  before any projections, and then the  analysis proceeds without actual removal  of any time points -- this feature is to  keep the spanish inquisition happy.* the default mode is kill !!!.
     * @param censor Filename of censor .1d time series.this is a file of 1s and 0s, indicating whichtime points are to be included (1) and which areto be excluded (0).
     * @param censortr List of strings that specify time indexes to be removed from the analysis.  each string isof one of the following forms:* ``37`` => remove global time index #37* ``2:37`` => remove time index #37 in run #2* ``37..47`` => remove global time indexes #37-47* ``37-47`` => same as above* ``2:37..47`` => remove time indexes #37-47 in run #2* ``*:0-2`` => remove time indexes #0-2 in all runs  * time indexes within each run start at 0.  * run indexes start at 1 (just be to confusing).  * n.b.: 2:37,47 means index #37 in run #2 and    global time index 47; it does not mean    index #37 in run #2 and index #47 in run #2.
     * @param concat The catenation file, as in 3ddeconvolve, containing thetr indexes of the start points for each contiguous runwithin the input dataset (the first entry should be 0).* also as in 3ddeconvolve, if the input dataset is  automatically catenated from a collection of datasets,  then the run start indexes are determined directly,  and '-concat' is not needed (and will be ignored).* each run must have at least 9 time points after  censoring, or the program will not work!* the only use made of this input is in setting up  the bandpass/stopband regressors.* '-ort' and '-dsort' regressors run through all time  points, as read in.  if you want separate projections  in each run, then you must either break these ort files  into appropriate components, or you must run 3dtproject  for each run separately, using the appropriate pieces  from the ort files via the ``{...}`` selector for the  1d files and the ``[...]`` selector for the datasets.
     * @param dsort Remove the 3d+time time series in dataset fset.* that is, 'fset' contains a different nuisance time  series for each voxel (e.g., from anaticor).* multiple -dsort options are allowed.
     * @param mask Only operate on voxels nonzero in the mset dataset.* voxels outside the mask will be filled with zeros.* if no masking option is given, then all voxels  will be processed.
     * @param noblock Also as in 3ddeconvolve, if you want the program to treatan auto-catenated dataset as one long run, use this option.however, '-noblock' will not affect catenation if you usethe '-concat' option.
     * @param norm normalize each output time series to have sum ofsquares = 1. this is the last operation.
     * @param ort Remove each column in file.each column will have its mean removed.
     * @param polort Remove polynomials up to and including degree pp.* default value is 2.* it makes no sense to use a value of pp greater than  2, if you are bandpassing out the lower frequencies!* for catenated datasets, each run gets a separate set  set of pp+1 legendre polynomial regressors.* use of -polort -1 is not advised (if data mean != 0),  even if -ort contains constant terms, as all means are  removed.
     * @param stopband (a float, a float). Remove all frequencies in the range.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTproject" as const,
        "automask": automask,
        "in_file": in_file,
        "noblock": noblock,
        "norm": norm,
        "prefix": prefix,
    };
    if (tr !== null) {
        params["TR"] = tr;
    }
    if (bandpass !== null) {
        params["bandpass"] = bandpass;
    }
    if (blur !== null) {
        params["blur"] = blur;
    }
    if (cenmode !== null) {
        params["cenmode"] = cenmode;
    }
    if (censor !== null) {
        params["censor"] = censor;
    }
    if (censortr !== null) {
        params["censortr"] = censortr;
    }
    if (concat !== null) {
        params["concat"] = concat;
    }
    if (dsort !== null) {
        params["dsort"] = dsort;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (ort !== null) {
        params["ort"] = ort;
    }
    if (polort !== null) {
        params["polort"] = polort;
    }
    if (stopband !== null) {
        params["stopband"] = stopband;
    }
    return params;
}


function v_3d_tproject_cargs(
    params: V3dTprojectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTproject");
    if ((params["TR"] ?? null) !== null) {
        cargs.push(
            "-TR",
            String((params["TR"] ?? null))
        );
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["bandpass"] ?? null) !== null) {
        cargs.push(
            "-bandpass",
            ...(params["bandpass"] ?? null).map(String)
        );
    }
    if ((params["blur"] ?? null) !== null) {
        cargs.push(
            "-blur",
            String((params["blur"] ?? null))
        );
    }
    if ((params["cenmode"] ?? null) !== null) {
        cargs.push(
            "-cenmode",
            (params["cenmode"] ?? null)
        );
    }
    if ((params["censor"] ?? null) !== null) {
        cargs.push(
            "-censor",
            execution.inputFile((params["censor"] ?? null))
        );
    }
    if ((params["censortr"] ?? null) !== null) {
        cargs.push(
            "-CENSORTR",
            ...(params["censortr"] ?? null)
        );
    }
    if ((params["concat"] ?? null) !== null) {
        cargs.push(
            "-concat",
            execution.inputFile((params["concat"] ?? null))
        );
    }
    if ((params["dsort"] ?? null) !== null) {
        cargs.push(
            "-dsort",
            ...(params["dsort"] ?? null).map(f => execution.inputFile(f))
        );
    }
    cargs.push(
        "-input",
        execution.inputFile((params["in_file"] ?? null))
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["noblock"] ?? null)) {
        cargs.push("-noblock");
    }
    if ((params["norm"] ?? null)) {
        cargs.push("-norm");
    }
    if ((params["ort"] ?? null) !== null) {
        cargs.push(
            "-ort",
            execution.inputFile((params["ort"] ?? null))
        );
    }
    if ((params["polort"] ?? null) !== null) {
        cargs.push(
            "-polort",
            String((params["polort"] ?? null))
        );
    }
    if ((params["stopband"] ?? null) !== null) {
        cargs.push(
            "-stopband",
            ...(params["stopband"] ?? null).map(String)
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    return cargs;
}


function v_3d_tproject_outputs(
    params: V3dTprojectParameters,
    execution: Execution,
): V3dTprojectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTprojectOutputs = {
        root: execution.outputFile("."),
        out_file: execution.outputFile([(params["prefix"] ?? null)].join('')),
    };
    return ret;
}


function v_3d_tproject_execute(
    params: V3dTprojectParameters,
    execution: Execution,
): V3dTprojectOutputs {
    /**
     * This program projects (detrends) out various 'nuisance' time series from each voxel in the input dataset.  Note that all the projections are done via linear regression, including the frequency-based options such as '-passband'.  In this way, you can bandpass time-censored data, and at the same time, remove other time series of no interest (e.g., physiological estimates, motion parameters).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTprojectOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tproject_cargs(params, execution)
    const ret = v_3d_tproject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tproject(
    in_file: InputPathType,
    prefix: string,
    tr: number | null = null,
    automask: boolean = false,
    bandpass: Array<number> | null = null,
    blur: number | null = null,
    cenmode: "kill" | "zero" | "ntrp" | null = null,
    censor: InputPathType | null = null,
    censortr: Array<string> | null = null,
    concat: InputPathType | null = null,
    dsort: Array<InputPathType> | null = null,
    mask: InputPathType | null = null,
    noblock: boolean = false,
    norm: boolean = false,
    ort: InputPathType | null = null,
    polort: number | null = null,
    stopband: Array<number> | null = null,
    runner: Runner | null = null,
): V3dTprojectOutputs {
    /**
     * This program projects (detrends) out various 'nuisance' time series from each voxel in the input dataset.  Note that all the projections are done via linear regression, including the frequency-based options such as '-passband'.  In this way, you can bandpass time-censored data, and at the same time, remove other time series of no interest (e.g., physiological estimates, motion parameters).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_file Input file to 3dtproject.
     * @param prefix Output file prefix.
     * @param tr Use time step dd for the frequency calculations,rather than the value stored in the dataset header.
     * @param automask Generate a mask automatically.
     * @param bandpass (a float, a float). Remove all frequencies except those in the range.
     * @param blur Blur (inside the mask only) with a filter that haswidth (fwhm) of fff millimeters.spatial blurring (if done) is after the timeseries filtering.
     * @param cenmode 'kill' or 'zero' or 'ntrp'. Specifies how censored time points are treated in the output dataset:* mode = zero -- put zero values in their place; output dataset is same length as input* mode = kill -- remove those time points;  output dataset is shorter than input* mode = ntrp -- censored values are replaced by interpolated  neighboring (in time) non-censored values,  before any projections, and then the  analysis proceeds without actual removal  of any time points -- this feature is to  keep the spanish inquisition happy.* the default mode is kill !!!.
     * @param censor Filename of censor .1d time series.this is a file of 1s and 0s, indicating whichtime points are to be included (1) and which areto be excluded (0).
     * @param censortr List of strings that specify time indexes to be removed from the analysis.  each string isof one of the following forms:* ``37`` => remove global time index #37* ``2:37`` => remove time index #37 in run #2* ``37..47`` => remove global time indexes #37-47* ``37-47`` => same as above* ``2:37..47`` => remove time indexes #37-47 in run #2* ``*:0-2`` => remove time indexes #0-2 in all runs  * time indexes within each run start at 0.  * run indexes start at 1 (just be to confusing).  * n.b.: 2:37,47 means index #37 in run #2 and    global time index 47; it does not mean    index #37 in run #2 and index #47 in run #2.
     * @param concat The catenation file, as in 3ddeconvolve, containing thetr indexes of the start points for each contiguous runwithin the input dataset (the first entry should be 0).* also as in 3ddeconvolve, if the input dataset is  automatically catenated from a collection of datasets,  then the run start indexes are determined directly,  and '-concat' is not needed (and will be ignored).* each run must have at least 9 time points after  censoring, or the program will not work!* the only use made of this input is in setting up  the bandpass/stopband regressors.* '-ort' and '-dsort' regressors run through all time  points, as read in.  if you want separate projections  in each run, then you must either break these ort files  into appropriate components, or you must run 3dtproject  for each run separately, using the appropriate pieces  from the ort files via the ``{...}`` selector for the  1d files and the ``[...]`` selector for the datasets.
     * @param dsort Remove the 3d+time time series in dataset fset.* that is, 'fset' contains a different nuisance time  series for each voxel (e.g., from anaticor).* multiple -dsort options are allowed.
     * @param mask Only operate on voxels nonzero in the mset dataset.* voxels outside the mask will be filled with zeros.* if no masking option is given, then all voxels  will be processed.
     * @param noblock Also as in 3ddeconvolve, if you want the program to treatan auto-catenated dataset as one long run, use this option.however, '-noblock' will not affect catenation if you usethe '-concat' option.
     * @param norm normalize each output time series to have sum ofsquares = 1. this is the last operation.
     * @param ort Remove each column in file.each column will have its mean removed.
     * @param polort Remove polynomials up to and including degree pp.* default value is 2.* it makes no sense to use a value of pp greater than  2, if you are bandpassing out the lower frequencies!* for catenated datasets, each run gets a separate set  set of pp+1 legendre polynomial regressors.* use of -polort -1 is not advised (if data mean != 0),  even if -ort contains constant terms, as all means are  removed.
     * @param stopband (a float, a float). Remove all frequencies in the range.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTprojectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TPROJECT_METADATA);
    const params = v_3d_tproject_params(in_file, prefix, tr, automask, bandpass, blur, cenmode, censor, censortr, concat, dsort, mask, noblock, norm, ort, polort, stopband)
    return v_3d_tproject_execute(params, execution);
}


export {
      V3dTprojectOutputs,
      V3dTprojectParameters,
      V_3D_TPROJECT_METADATA,
      v_3d_tproject,
      v_3d_tproject_params,
};
