// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const NMOVIE_QT_METADATA: Metadata = {
    id: "40a52c883b6ef1eabbaca98341ef5cfeff36ee79.boutiques",
    name: "nmovie_qt",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface NmovieQtParameters {
    "__STYXTYPE__": "nmovie_qt";
    "images": Array<InputPathType>;
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
        "nmovie_qt": nmovie_qt_cargs,
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
 * Output object returned when calling `nmovie_qt(...)`.
 *
 * @interface
 */
interface NmovieQtOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function nmovie_qt_params(
    images: Array<InputPathType>,
): NmovieQtParameters {
    /**
     * Build parameters.
    
     * @param images Input image files to be displayed. Multiple files can be provided.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "nmovie_qt" as const,
        "images": images,
    };
    return params;
}


function nmovie_qt_cargs(
    params: NmovieQtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("nmovie_qt");
    cargs.push(...(params["images"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function nmovie_qt_outputs(
    params: NmovieQtParameters,
    execution: Execution,
): NmovieQtOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: NmovieQtOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function nmovie_qt_execute(
    params: NmovieQtParameters,
    execution: Execution,
): NmovieQtOutputs {
    /**
     * An image viewer using Qt for displaying images in sequence.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `NmovieQtOutputs`).
     */
    params = execution.params(params)
    const cargs = nmovie_qt_cargs(params, execution)
    const ret = nmovie_qt_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function nmovie_qt(
    images: Array<InputPathType>,
    runner: Runner | null = null,
): NmovieQtOutputs {
    /**
     * An image viewer using Qt for displaying images in sequence.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param images Input image files to be displayed. Multiple files can be provided.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `NmovieQtOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(NMOVIE_QT_METADATA);
    const params = nmovie_qt_params(images)
    return nmovie_qt_execute(params, execution);
}


export {
      NMOVIE_QT_METADATA,
      NmovieQtOutputs,
      NmovieQtParameters,
      nmovie_qt,
      nmovie_qt_params,
};
